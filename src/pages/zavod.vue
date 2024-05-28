<script setup>
import wallVue from "@/components/masks/wall.vue"
import pageTitle from "@/components/pageTitle.vue";
import tiles from "@/components/tiles.vue";

let tileContent = [
  {
    image: '/test/img/tiles/zavod/im.jpg', title: 'Интернет - магазин',
    style: 'grid-row: span 2; grid-column: span 3',
    link: '/',
  },

  {
    image: '/test/img/tiles/zavod/price.jpg', title: 'Прайс-листы',
    link: '/',
  },

  {
    image: '/test/img/tiles/zavod/conacts.jpg', title: 'Контакты',
    link: '/',
  },

  {
    image: '/test/img/tiles/zavod/dostavka.jpg', title: 'Доставка',
    style: 'grid-column: span 2;',
    link: '/',
  },

  {
    image: '/test/img/tiles/zavod/gallery.jpg', title: 'Галерея',
    link: '/',
  },

  {
    image: '/test/img/tiles/zavod/akcii.jpg', title: 'Акции и скидки',
    style: 'grid-column: span 2;',
    link: '/',
  },


  {
    image: '/test/img/tiles/zavod/news.jpg', title: 'Блог',
    link: '/',
    // style: 'grid-column: span 2;',
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
  position: absolute;
  width: 100%;
}
</style>