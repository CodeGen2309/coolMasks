<script setup>
import artVue from "@/components/masks/art.vue";
import pageTitle from "@/components/pageTitle.vue";
import tiles from "@/components/tiles.vue"
import menuSection from "@/components/menuSection.vue"

let devImg = '/public/mainImages/tiles'
let prodImg = '/test/mainImages/tiles'
let tilesPath = devImg

let tilesBkp = [
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
    link: 'https://belbeton.ru/corporation/news/',
    style: ' grid-column: span 2',
  },

  {
    image: `${tilesPath}/corp/socobj.jpg`, title: 'Социальные объекты',
    link: '#',
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
  align-self: flex-start;
  z-index: -1;
  height: 70vh;
}


.home__title {
  position: absolute;
  top: 50px;
  margin: 20px;
  font-size: 24px;
  /* align-self: flex-start; */
}

.home__tiles {
  position: relative;
  width: 100%;
  height:55vh;
}
</style>