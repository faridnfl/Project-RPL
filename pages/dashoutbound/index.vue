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
            </div>
            <div class="board-bottom">
                <div class="map-out">
                    <p>Registration by Country</p>
                    <div id="map" style="width: 100%; height: 80%"> </div>
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
const outboundData = ref([])
let countryCodeCount = {}
let values = ref({})
const totalRegistrations = ref(0)
const totalInstitutions = ref(0)


onMounted(async () => {
    await fetchDataFromDirectus()

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
})

onBeforeUnmount(() => {
    if (map) {
        map.destroy()
        map = null
    }
})

async function fetchDataFromDirectus() {
    const response = await fetch('http://localhost:8055/items/Outbound')
    const data = await response.json()
    outboundData.value = data.data

    totalRegistrations.value = outboundData.value.length
    const institutionsSet = new Set()
 
    outboundData.value.forEach(entry => {
        const countryCode = entry.negaraTujuan
        institutionsSet.add(entry.institusiTujuan)
        
        countryCodeCount[countryCode] = (countryCodeCount[countryCode] || 0) + 1
    })
    values.value = countryCodeCount
    totalInstitutions.value = institutionsSet.size
}

</script>

