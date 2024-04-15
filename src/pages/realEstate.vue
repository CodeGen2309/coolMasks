<script setup>
import rainVue from "@/components/masks/rain.vue";
import pageTitle from "@/components/pageTitle.vue";
import tiles from "@/components/tiles.vue";

let tileContent = [
  {
    image: '/img/tiles/6.jpg', title: 'Школа "Вектор Успеха"',
    grow: 2, style: 'grid-column: span 2; grid-row: span 2',
  },

  {
    image: '/img/tiles/1.jpg', title: 'Наши обьекты',
    style: 'grid-column: span 2',
  },

  {
    image: '/img/tiles/2.jpg', title: 'Квартира дня',
  },

  {
    image: '/img/tiles/3.jpg', title: 'Дюплексы Новая Заря',
    style: ' grid-column: span 2 ',
  },

  {
    image: '/img/tiles/4.jpg', title: 'ЖК Новая Заря',
  },

  {
    image: '/img/tiles/5.jpg', title: 'Акции и скидки',
  },

  {
    image: '/img/tiles/7.jpg', title: 'Ставки от банков - партнеров',
  },
]

</script>

<template>
  <div class="rest__holder">
    <page-title class="rest__title" title="Недвижимость ЖБК - 1"></page-title>
    <rainVue class="rest__cover"></rainVue>
    <tiles class="home__tiles" :tiles="tileContent"></tiles>
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
  z-index: -1;
}


.rest__title {
  position: absolute;
  top: 100px;
  margin: 20px;
  font-size: 24px;
}

.home__tiles {
  position: relative;
  width: 100%;
}
</style>