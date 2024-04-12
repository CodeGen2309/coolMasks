<script setup>
import rainVue from "@/components/masks/rain.vue";
import pageTitle from "@/components/pageTitle.vue";
import tiles from "@/components/tiles.vue";

</script>

<template>
  <div class="rest__holder">
    <page-title class="rest__title" title="Недвижимость ЖБК - 1"></page-title>
    <rainVue class="rest__cover"></rainVue>
    <tiles class="home__tiles"></tiles>
  </div>
</template>




<style>
.rest__holder {
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 90vh;

}

.rest__cover {
  position: absolute;
}


.rest__title {
  position: absolute;
  top: 100px;
  width: 400px;
  margin: 20px;
}

.home__tiles {
  position: relative;
}
</style>