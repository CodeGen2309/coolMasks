<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import { Component } from 'vue';
import Header from './components/header.vue';

</script>

<template>
  <Header />
  
  <router-view class="route__component" v-slot="{ Component }">

  <transition name="routeFade">
    <component :is="Component" />
  </transition>
</router-view></template>

<style scoped>
  .route__component {
    transition: 1s;
  }

  .routeFade-enter-active,
  .routeFade-leave-active {
    opacity: 0;
    transition: .5s;
  }
</style>