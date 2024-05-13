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
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world-merc'

let map = null

onMounted(() => {
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
        values: {
            EG: 20,
            ID: 10,
            CA: 15,
            BR: 5,
        }
    }
  })
})
</script>