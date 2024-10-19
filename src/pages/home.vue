<script setup>
import { getCurrentInstance } from "vue";

import artVue from "@/components/masks/art.vue";
import pageTitle from "@/components/pageTitle.vue";
import tiles from "@/components/tiles.vue"

let globals  = getCurrentInstance().appContext.config.globalProperties
let tilesPath = `${globals.$imgPath}/tiles/`


let tilesBkp = [
  {
    image: `${tilesPath}/corp/zavodnew.webp`, title: 'АО Завод ЖБК - 1',
    style: ' grid-column: span 2; grid-row: span 2',
    link: 'https://belbeton.ru/building-materials/catalog/',
  },


  {
    image: `${tilesPath}/corp/nedvnew.jpg`, title: 'Недвижимость ЖБК - 1',
    style: ' grid-column: span 2; grid-row: span 2',
    link: 'https://belbeton.ru/real-estate/',
  },


  // {
  //   image: `${tilesPath}/corp/akcii.jpg`, title: 'Акции и скидки',
  //   style: 'grid-column: span 2',
  //   link: 'https://belbeton.ru/real-estate/promotions-and-discounts/',
  // },
  

  {
    image: `${tilesPath}/corp/kommnew.jpg`, title: 'Коммерческая недвижимость',
    link: 'https://belbeton.ru/real-estate/construction/commercial-spaces/',
  },


  // {
  //   image: `${tilesPath}/zavod/im.jpg`, title: 'Интернет - магазин',
  //   style: 'grid-row: span 2; grid-column: span 3',
  //   // style: 'grid-row: span 2',
  //   link: 'https://belbeton.ru/building-materials/catalog/',
  // },


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


<style  >
.home__holder {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100vh;
}


.home__cover {
  position: absolute;
  top: -80px; right: -130px;
  width: 80%;
  z-index: -1;
}


.home__title {
  position: absolute;
  top: 20%; left: 0;
  margin: 0 30px;
  font-size: 24px;
}

.home__tiles {
  position: relative;
  width: 100%;
  height:55vh;
  margin: 40px;
  margin-right: 10%;
}
</style>