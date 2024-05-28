<script setup>
import artVue from "@/components/masks/art.vue";
import pageTitle from "@/components/pageTitle.vue";
import tiles from "@/components/tiles.vue"

let tilesBkp = [
  // {
  //   image: '/img/tiles/6.jpg', title: 'Школа "Вектор Успеха"',
  //   style: 'grid-row: span 2; grid-column: span 5',
  // },

  {
    image: '/test/img/tiles/corp/nedv.jpg', title: 'Недвижимость ЖБК - 1',
    style: ' grid-column: span 2; grid-row: span 2',
  },

  {
    image: '/test/img/tiles/zavod/akcii.jpg', title: 'Акции и скидки',
    style: 'grid-column: span 2',
  },

  {
    image: '/test/img/tiles/corp/komm.jpg', title: 'Коммерческая недвижимость',
  },

  {
    image: '/test/img/tiles/corp/zavod.jpg', title: 'АО Завод ЖБК - 1',
    style: ' grid-column: span 2',
  },

  {
    image: '/test/img/tiles/corp/jnk.jpg', title: 'ЖНК ЖБК - 1',
    style: 'grid-column: span 2',
  },

  {
    image: '/test/img/tiles/corp/news.jpg', title: 'Новости корпорации',
    style: 'grid-row: span'
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
}
</style>