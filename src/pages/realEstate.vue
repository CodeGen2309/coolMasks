<script setup>
import rainVue from "@/components/masks/rain.vue";
import pageTitle from "@/components/pageTitle.vue";
import tiles from "@/components/tiles.vue";

let devImg = '/public/mainImages/tiles'
let prodImg = '/test/mainImages/tiles'
let tilesPath = devImg



let tileContent = [
  {
    image: `${tilesPath}/nedv/obj.jpg`, title: 'Объекты строительства',
    // style: 'grid-column: span 2; grid-row: span 2',
    style: 'grid-row: span 2',
    link: 'https://belbeton.ru/real-estate/construction/buildings/',
  },

  {
    image: `${tilesPath}/nedv/price.jpg`, title: 'Прайс-лист',
    // style: 'grid-column: span 2',
    link: 'https://belbeton.ru/real-estate/price-list-for-property/',
  },

  {
    image: `${tilesPath}/nedv/komm.jpg`, title: 'Коммерческая недвижимость',
    link: 'https://belbeton.ru/real-estate/construction/commercial-spaces/',
  },

  {
    image: `${tilesPath}/nedv/garages.jpg`, title: 'Гаражи',
    style: ' grid-column: span 2 ',
    link: 'https://belbeton.ru/real-estate/how-to-buy/',
  },

  {
    image: `${tilesPath}/nedv/kak.jpg`, title: 'Как купить',
    link: 'https://belbeton.ru/real-estate/construction/garages/',
    style: ' grid-column: span 2 ',
  },

  {
    image: `${tilesPath}/nedv/akcii.jpg`, title: 'Акции и скидки',
    // style: ' grid-column: span 2 ',
    link: 'https://belbeton.ru/real-estate/promotions-and-discounts/',
  },

  {
    image: `${tilesPath}/nedv/vopros.jpg`, title: 'Вопрос-ответ',
    link: 'https://belbeton.ru/real-estate/question-answer/',
  },

  // {
  //   image: `${tilesPath}/nedv/jnk.jpg`, title: 'ЖНК ЖБК - 1',
  //   link: 'https://belbeton.ru/wnc/',
  // },
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
  height: 50vh;
}
</style>