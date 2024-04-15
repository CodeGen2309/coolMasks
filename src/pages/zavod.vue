<script setup>
import wallVue from "@/components/masks/wall.vue"
import pageTitle from "@/components/pageTitle.vue";
import tiles from "@/components/tiles.vue";

let tileContent = [
  {
    image: '/img/tiles/7.jpg', title: 'Тротуарная плитка',
    style: 'grid-row: span 2; grid-column: span 3',
  },

  {
    image: '/img/tiles/1.jpg', title: 'Прайс листы',
  },

  {
    image: '/img/tiles/2.jpg', title: 'Детское игровое оборудование',
    style: 'grid-column: span 2;',
  },

  {
    image: '/img/tiles/3.jpg', title: 'Межкомнатные двери',
  },

  {
    image: '/img/tiles/4.jpg', title: 'Скамейки и урны',
    style: 'grid-column: span 2;',
  },


  {
    image: '/img/tiles/6.jpg', title: 'Плитка "Терасса"',
    style: 'grid-column: span 2;',
  },
]


</script>

<template>
  <div class="zvd__holder">
    <pageTitle class="zvd__title" title="АО 'Завод ЖБК - 1'"></pageTitle>
    <wallVue class="zvd__cover"></wallVue>
    <tiles class="zvd__tiles" :tiles="tileContent" ></tiles>
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
  height: 100%;
  z-index: -1;
}

.zvd__title {
  position: absolute;
  top: 100px;
  margin: 20px;
  font-size: 24px;
}

.zvd__tiles {
  position: relative;
  width: 100%;
}
</style>