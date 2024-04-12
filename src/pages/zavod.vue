<script setup>
import wallVue from "@/components/masks/wall.vue"
import pageTitle from "@/components/pageTitle.vue";
import tiles from "@/components/tiles.vue";

</script>

<template>
  <div class="zvd__holder">
    <pageTitle class="zvd__title" title="АО 'Завод ЖБК - 1'"></pageTitle>
    <wallVue class="zvd__cover"></wallVue>
    <tiles class="zvd__tiles"></tiles>
  </div>
</template>



<style>

.zvd__holder {
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 90vh; 
}

.zvd__cover {
  position: absolute;
}

.zvd__title {
  position: absolute;
  top: 100px;
  width: 400px;
  margin: 20px;
}

.zvd__tiles {
  position: relative;
}
</style>