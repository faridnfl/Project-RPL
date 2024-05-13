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
            <div id="map" style="width: 700px; height: 300px"></div>
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
    regionStyle: {
        initial: {
            fill: '#EFEFEF',
            stroke: "#676767",
            strokeWidth: 0.5,
            fillOpacity: 3
        }
    }
  })
})
</script>