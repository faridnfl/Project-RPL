<style>
@import url("/assets/css/dashboard.css");
</style>


<template>
    <div class="dashboard-isi">
        <div class="tab-container">
            <NuxtLink to="/dashboard">
                <label class="tab_label" for="tab1">Inbound</label>
            </NuxtLink>
            <NuxtLink to="/dashoutbound">
                <label class="tab_label" for="tab2">Outbound</label>
            </NuxtLink>

            <div class="indicator"></div>
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
                <div class="pie">
                    <p>Type Of Program</p>
                    <canvas id="piechart" style="width: 75%; height: 50%"></canvas>
                </div>
                <div class="tujuan">
                    <p>Purpose of Inbound</p>
                    <div class="list-tujuan">
                        <ul>
                            <li v-for="purpose in purposeData" :key="purpose.name" class="purpose-item">
                                <span class="purpose-name">{{ purpose.name }}</span>
                                <span class="purpose-count">{{ purpose.count }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="board-bottom">
                <div class="map">
                    <p>Registration by Country</p>
                    <div id="map" style="width: 100%; height: 80%"> </div>
                </div>
                <div class="bar">
                    <p>Position</p>
                    <canvas id="barchart" style="width: 500px;"></canvas>
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
let barchart = null

const inboundData = ref([])
let countryCodeCount = {}
let values = ref({})
const totalRegistrations = ref(0)
const totalInstitutions = ref(0)
const pieChartData = ref([0, 0, 0])
const barChartData = ref([0, 0, 0, 0, 0, 0])
const purposeData = ref([])

onMounted(async () => {
    await fetchDataFromDirectus()

    const ctx = document.getElementById('piechart')
    const barCtx = document.getElementById('barchart')

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
                    'rgb(112, 209, 115)',
                    'rgb(201, 35, 35)',
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

    barchart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Dosen (Lecturer)', 'Professor', 'Undergraduate', 'Master', 'Doctoral / PhD', 'Academic Staff'],
            datasets: [{
                label: 'Position',
                data: barChartData.value,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 205, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(201, 203, 207, 0.6)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }]
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
    if (barchart) {
        barchart.destroy()
        barchart = null
    }
})

async function fetchDataFromDirectus() {
    const response = await fetch('http://localhost:8055/items/inbound')
    const data = await response.json()
    inboundData.value = data.data

    totalRegistrations.value = inboundData.value.length
    const institutionsSet = new Set()
    const purposeCount = {}
    
    inboundData.value.forEach(entry => {
        const countryCode = entry.Kewarganegaraan
        
        countryCodeCount[countryCode] = (countryCodeCount[countryCode] || 0) + 1
        institutionsSet.add(entry.institusiAsal)

        if (entry.tipeProgram === 'Online') {
            pieChartData.value[0]++
        } else if (entry.tipeProgram === 'Offline') {
            pieChartData.value[1]++
        } else if (entry.tipeProgram === 'Hybrid (Offline and Online)') {
            pieChartData.value[2]++
        }

        if(entry.posisi === 'Dosen (Lecturer)') {
            barChartData.value[0]++
        } else if (entry.posisi === 'Professor') {
            barChartData.value[1]++
        } else if (entry.posisi === 'Mahasiswa Sarjana (Student: Undergraduate)') {
            barChartData.value[2]++
        } else if (entry.posisi === 'Mahasiswa Magister (Student: Master)') {
            barChartData.value[3]++
        } else if (entry.posisi === 'Mahasiswa Doktor (Student: Doctoral/PhD)') {
            barChartData.value[4]++
        } else if (entry.posisi === 'Staf Akademik (Academic Staff)') {
            barChartData.value[5]++
        }

        const purpose = entry.tujuanInbound
        if (purpose) {
            purposeCount[purpose] = (purposeCount[purpose] || 0) + 1
        }
    })
    values.value = countryCodeCount
    totalInstitutions.value = institutionsSet.size
    purposeData.value = Object.entries(purposeCount)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
}
</script>
