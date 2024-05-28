<script setup>
import rainVue from "@/components/masks/rain.vue";
import pageTitle from "@/components/pageTitle.vue";
import tiles from "@/components/tiles.vue";

let tileContent = [
  {
    image: '/test/img/tiles/nedv/obj.jpg', title: 'Объекты строительства',
    grow: 2, style: 'grid-column: span 2; grid-row: span 2',
  },

  {
    image: '/test/img/tiles/nedv/price.jpg', title: 'Прайс-лист',
    style: 'grid-column: span 2',
  },

  {
    image: '/test/img/tiles/nedv/komm.jpg', title: 'Коммерческая недвижимость',
  },

  {
    image: '/test/img/tiles/nedv/garages.jpg', title: 'Гаражи',
    style: ' grid-column: span 2 ',
  },

  {
    image: '/test/img/tiles/nedv/kak.jpg', title: 'Как купить',
  },

  {
    image: '/test/img/tiles/nedv/akcii.jpg', title: 'Акции и скидки',
    style: ' grid-column: span 2 ',
  },

  {
    image: '/test/img/tiles/nedv/vopros.jpg', title: 'Вопрос-ответ',
  },

  {
    image: '/test/img/tiles/nedv/jnk.jpg', title: 'ЖНК ЖБК - 1',
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