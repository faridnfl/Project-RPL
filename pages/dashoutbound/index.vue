<style>
@import url("/assets/css/dashboard-outbound.css");
</style>

<template>
    <div class="dashboard-isi">
        <div class="tab-container">
            <input type="radio" name="tab" id="tab1" class="tab tab--1" />
            <NuxtLink to="/dashboard">
                <label class="tab_label" for="tab1">Inbound</label>
            </NuxtLink>

            <input type="radio" name="tab" id="tab2" class="tab tab--2" />
            <NuxtLink to="/dashoutbound">
                <label class="tab_label" for="tab2">Outbound</label>
            </NuxtLink>

            <div class="indicator"></div>
        </div>
        <div class="dashboard-board">
            <div class="board-top">
                <div class="reg-out">
                    <img src="/assets/profile.png">
                    <p id="reg-number">{{ totalRegistrations }}</p>
                    <p>Total Registration</p>
                </div>
                <div class="institution-out">
                    <img src="/assets/institution.png">
                    <p id="reg-number">{{ totalInstitutions }}</p>
                    <p>Total Institution</p>
                </div>
                <div class="pie-out">
                    <p>Type Of Program</p>
                    <canvas id="piechart" style="width: 75%; height: 50%"></canvas>
                </div>
                <div class="fakultas">
                    <p>Faculties</p>
                    <div class="list-fakultas">
                        <ul>
                            <li v-for="(count, faculty) in sortedFakultasData" :key="faculty" class="fakultas-item">
                            <span class="faculty-name">{{ faculty }}</span>
                            <span class="faculty-count">{{ count }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="board-bottom">
                <div class="map-out">
                    <p>Registration by Country</p>
                    <div id="map" style="width: 100%; height: 80%"> </div>
                </div>
                <div class="bar-out">
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
let barchart = null
let piechart = null

const outboundData = ref([])
let countryCodeCount = {}
let values = ref({})
const totalRegistrations = ref(0)
const totalInstitutions = ref(0)
const barChartData = ref([0, 0, 0, 0, 0, 0])
const pieChartData = ref([0, 0, 0])
const fakultasData = ref({})

const sortedFakultasData = computed(() => {
    const sortedData = Object.entries(fakultasData.value)
        .sort((a, b) => b[1] - a[1])
        .reduce((acc, [key, value]) => {
            acc[key] = value
            return acc
        }, {})
    return sortedData
})

onMounted(async () => {
    await fetchDataFromDirectus()

    if (map) {
        map.destroy()
    }
    document.getElementById('map').innerHTML = '';

    const barCtx = document.getElementById('barchart')
    const ctx = document.getElementById('piechart')

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
            const countryData = outboundData.value.find(entry => entry.negaraTujuan === code)
            if (countryData) {
                const countryName = countryData.negaraTujuan
                const countryCount = countryCodeCount[code] || 0
                tooltip.text(`<p>${countryName} - ${countryCount}</p>`, true)
            } else {
                tooltip.text(`<p>${tooltip.text()}`, true)
            }
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
                    'rgba(0, 103, 162, 0.7)',
                    'rgba(0, 103, 162, 0.7)',
                    'rgba(0, 103, 162, 0.7)',
                    'rgba(0, 103, 162, 0.7)',
                    'rgba(0, 103, 162, 0.7)',
                    'rgba(0, 103, 162, 0.7)',
                    'rgba(0, 103, 162, 0.7)'
                ],
                borderWidth: 1
            }]
        },
    })

    piechart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: pieChartData.value,
                backgroundColor: [
                    'rgba(112, 209, 115, 0.9)',
                    'rgba(231, 152, 0, 0.9)',
                    'rgba(221, 212, 0, 0.9)'
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
    if (barchart) {
        barchart.destroy()
        barchart = null
    }
    if (piechart) {
        piechart.destroy()
        piechart = null
    }
})

async function fetchDataFromDirectus() {
    const response = await fetch('https://directusinboundoutbound.up.railway.app/items/outbound')
    const data = await response.json()
    outboundData.value = data.data

    totalRegistrations.value = outboundData.value.length
    const institutionsSet = new Set()
    const fakultasCount = {}
 
    outboundData.value.forEach(entry => {
        const countryCode = entry.negaraTujuan
        institutionsSet.add(entry.institusiTujuan)

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

        if (entry.tipeProgram === 'Online') {
            pieChartData.value[0]++
        } else if (entry.tipeProgram === 'Offline') {
            pieChartData.value[1]++
        } else if (entry.tipeProgram === 'Hybrid (Offline and Online)') {
            pieChartData.value[2]++
        }

        if (entry.fakultas) {
            if (!fakultasCount[entry.fakultas]) {
                fakultasCount[entry.fakultas] = 0
            }
            fakultasCount[entry.fakultas]++
        }

        
        countryCodeCount[countryCode] = (countryCodeCount[countryCode] || 0) + 1
    })
    values.value = countryCodeCount
    totalInstitutions.value = institutionsSet.size
    fakultasData.value = fakultasCount
}

</script>

