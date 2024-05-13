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
            <div>
        
            </div>
            <div class="board-map">
                <p>Geography Based Traffic</p>
                <span id="map" style="width: 500px; height: 300px;"></span>
            </div>
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue'
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world-merc'
import { Tooltip } from '@amcharts/amcharts5';

let map = null
const inboundData = ref([]);
let countryCodeCount = {}
let values = ref({})

onMounted(async () => {
    await fetchDataFromDirectus()
    console.log('Nilai values setelah diambil dari Directus:', values.value)
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
            }
        },
        visualizeData: {
            scale: ['#fdb5b5', '#e14f4f', '#8d0f0f', '#ff0000'],
            values: values.value
        },
        onRegionTooltipShow(event, tooltip, code) {
            const countryData = inboundData.value.find(entry => entry.Kewarganegaraan === code);
            if (countryData) {
                
                const countryName = countryData.Kewarganegaraan; 
                const countryCount = countryCodeCount[code] || 0;
                tooltip.text(`<p>${countryName} - ${countryCount}</p>`, true);
            } else {
                
                tooltip.text(`<p>${tooltip.text()}`, true);
            }
        },
    })
})



async function fetchDataFromDirectus() {
    const response = await fetch('http://localhost:8055/items/inbound')
    const data = await response.json()
    inboundData.value = data.data
    
    inboundData.value.forEach(entry => {
        const countryCode = entry.Kewarganegaraan
        
        countryCodeCount[countryCode] = (countryCodeCount[countryCode] || 0) + 1
    })
    values.value = countryCodeCount
    }
</script>
