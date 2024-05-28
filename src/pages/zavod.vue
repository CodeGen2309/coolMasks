<script setup>
import wallVue from "@/components/masks/wall.vue"
import pageTitle from "@/components/pageTitle.vue";
import tiles from "@/components/tiles.vue";

let devImg = '/public/img/tiles'
let prodImg = '/test/img/tiles'
let tilesPath = devImg


let tileContent = [
  {
    image: `${tilesPath}/zavod/im.jpg`, title: 'Интернет - магазин',
    style: 'grid-row: span 2; grid-column: span 3',
    link: 'https://belbeton.ru/building-materials/catalog/',
  },

  {
    image: `${tilesPath}/zavod/price.jpg`, title: 'Прайс-листы',
    link: 'https://belbeton.ru/building-materials/price-list/',
  },

  {
    image: `${tilesPath}/zavod/conacts.jpg`, title: 'Контакты',
    link: 'https://belbeton.ru/building-materials/contacts/addresses-and-phone-numbers/',
  },

  {
    image: `${tilesPath}/zavod/dostavka.jpg`, title: 'Доставка',
    style: 'grid-column: span 2;',
    link: 'https://belbeton.ru/building-materials/',
  },

  {
    image: `${tilesPath}/zavod/gallery.jpg`, title: 'Галерея',
    link: 'https://belbeton.ru/building-materials/',
  },

  {
    image: `${tilesPath}/zavod/akcii.jpg`, title: 'Акции и скидки',
    style: 'grid-column: span 2;',
    link: 'https://belbeton.ru/building-materials/promotions-and-discounts/',
  },


  {
    image: `${tilesPath}/zavod/news.jpg`, title: 'Блог',
    link: 'https://belbeton.ru/building-materials/article/',
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
  height: 50vh;
}
</style>