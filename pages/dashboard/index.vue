<style>
@import url("/assets/css/dashboard.css");
</style>


<template>
    <div class="dashboard-isi">
        <div class="dashboard-nav">
            <div class="nav-kiri">
                <p>Inbound</p>
            </div>
            <div class="nav-kanan">
                <p>Outbound</p>
            </div>
        </div>
        <div class="dashboard-board">
            <div class="board-top">
                <div class="reg">
                    <img src="/assets/profile.png">
                    <p id="reg-number">{{ totalRegistrations }}</p>
                    <p>Total Registration</p>
                </div>
                <div class="institution">
                    <img src="/assets/institution.png">
                    <p id="reg-number">{{ totalInstitutions }}</p>
                    <p>Total Institution</p>
                </div>
            </div>
            <div class="board-bottom">
                <div class="map">
                    <p>Geography Based Traffic</p>
                    <div id="map" style="width: 100%; height: 80%"> </div>
                </div>
                <div class="pie">
                    <p>Type Of Program</p>
                    <canvas id="piechart" style="width: 80%;"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world-merc'
import Chart from 'chart.js/auto'

let map = null
let piechart = null

const inboundData = ref([])
let countryCodeCount = {}
let values = ref({})
const totalRegistrations = ref(0)
const totalInstitutions = ref(0)
const pieChartData = ref([0, 0, 0])

onMounted(async () => {
    await fetchDataFromDirectus()

    const ctx = document.getElementById('piechart')

    if (map) {
        map.destroy()
    }
    document.getElementById('map').innerHTML = '';

    map = new jsVectorMap({
        selector: '#map',
        map: 'world_merc',
        draggable: true,
        zoomButtons: false,
        showTooltip: true,
        zoomOnScroll: true,
        regionStyle: {
            initial: {
                fill: '#c7c7c7',
            },
        },
        visualizeData: {
            scale: ['#fdb5b5', '#e14f4f', '#8d0f0f', '#ff0000'],
            values: values.value
        },
        onRegionTooltipShow(event, tooltip, code) {
            const countryData = inboundData.value.find(entry => entry.Kewarganegaraan === code)
            if (countryData) {
                const countryName = countryData.Kewarganegaraan
                const countryCount = countryCodeCount[code] || 0
                tooltip.text(`<p>${countryName} - ${countryCount}</p>`, true)
            } else {
                tooltip.text(`<p>${tooltip.text()}`, true)
            }
        },
    })

    piechart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: pieChartData.value,
                backgroundColor: [
                    'rgb(201, 35, 35)',
                    'rgb(112, 209, 115)',
                    'rgb(248, 243, 1)'
                ],
                hoverOffset: 4
            }],
            labels: [
                'Online',
                'Offline',
                'Hybrid'
            ]
        },
    })
})

onBeforeUnmount(() => {
    if (map) {
        map.destroy()
        map = null
    }
    if (piechart) {
        piechart.destroy()
        piechart = null
    }
})

async function fetchDataFromDirectus() {
    const response = await fetch('http://localhost:8055/items/inbound')
    const data = await response.json()
    inboundData.value = data.data

    totalRegistrations.value = inboundData.value.length
    const institutionsSet = new Set()
    
    inboundData.value.forEach(entry => {
        const countryCode = entry.Kewarganegaraan
        
        countryCodeCount[countryCode] = (countryCodeCount[countryCode] || 0) + 1
        institutionsSet.add(entry.institusiAsal)

        if (entry.tipeProgram === 'Online') {
            pieChartData.value[0]++
        } else if (entry.tipeProgram === 'Offline') {
            pieChartData.value[1]++
        } else if (entry.tipeProgram === 'Hybrid') {
            pieChartData.value[2]++
        }
    })
    values.value = countryCodeCount
    totalInstitutions.value = institutionsSet.size
}
</script>
