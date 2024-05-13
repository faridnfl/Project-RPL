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
        draggable: false,
        zoomButtons: false, 
        showTooltip: false, 
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#c7c7c7',
            }
        },
        visualizeData: {
            scale: ['#c7c7c7', '#ff0000'],
            values: values.value
        }
    })

    
    async function fetchDataFromDirectus() {
        // Gantikan 'URL' dengan URL yang benar untuk mengambil data dari Directus
        const response = await fetch('http://localhost:8055/items/inbound')
        const data = await response.json()
        inboundData.value = data.data
    
        inboundData.value.forEach(entry => {
            const countryCode = entry.Kewarganegaraan
            countryCodeCount[countryCode] = (countryCodeCount[countryCode] || 0) + 1
        })
        values.value = countryCodeCount
    }
})
</script>
