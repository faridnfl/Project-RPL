<style>
@import url("/assets/css/header.css");
</style>

<template>
        <div class="header-top">
            <NuxtLink to="/">
                <img src="/assets/logo.png">
            </NuxtLink>
        </div>
        <div class="nav-bar">
            <ul>
                <li><NuxtLink to="/">HOME</NuxtLink></li>
                <li class="garis-tengah">|</li>
                <li><NuxtLink to="/dashboard">DASHBOARD</NuxtLink></li>
            </ul>
        </div>
</template>