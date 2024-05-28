<script setup>
import artVue from "@/components/masks/art.vue";
import pageTitle from "@/components/pageTitle.vue";
import tiles from "@/components/tiles.vue"

let devImg = '/public/img/tiles'
let prodImg = '/test/img/tiles'
let tilesPath = devImg

let tilesBkp = [
  // {
  //   image: '/img/tiles/6.jpg', title: 'Школа "Вектор Успеха"',
  //   style: 'grid-row: span 2; grid-column: span 5',
  // },

  {
    image: `${tilesPath}/corp/nedv.jpg`, title: 'Недвижимость ЖБК - 1',
    style: ' grid-column: span 2; grid-row: span 2',
    link: 'https://belbeton.ru/real-estate/',
  },

  {
    image: `${tilesPath}/zavod/akcii.jpg`, title: 'Акции и скидки',
    style: 'grid-column: span 2',
    link: 'https://belbeton.ru/real-estate/promotions-and-discounts/',
  },

  {
    image: `${tilesPath}/corp/komm.jpg`, title: 'Коммерческая недвижимость',
    link: 'https://belbeton.ru/real-estate/construction/commercial-spaces/',
  },

  {
    image: `${tilesPath}/corp/zavod.jpg`, title: 'АО Завод ЖБК - 1',
    style: ' grid-column: span 2',
    link: 'https://belbeton.ru/building-materials/catalog/',
  },

  {
    image: `${tilesPath}/corp/jnk.jpg`, title: 'ЖНК ЖБК - 1',
    style: 'grid-column: span 2',
    link: 'https://belbeton.ru/wnc/ ',
  },

  {
    image: `${tilesPath}/corp/news.jpg`, title: 'Новости корпорации',
    style: 'grid-row: span',
    link: 'https://belbeton.ru/corporation/news/',
  },

]


</script>

<template>
  <div class="home__holder">
    <artVue class="home__cover"></artVue>
    <pageTitle class="home__title" title="Корпорация ЖБК -1" />
    <tiles class="home__tiles" :tiles="tilesBkp"></tiles>
  </div>
</template>


<style>
.home__holder {
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 90vh;
}

.home__cover {
  position: absolute;
  z-index: -1;
  height: 90vh;
}


.home__title {
  position: absolute;
  top: 100px;
  margin: 20px;
  font-size: 24px;
}

.home__tiles {
  position: relative;
  width: 100%;
  height: 50vh;
}
</style>