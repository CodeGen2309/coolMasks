<script setup>
import { animate, stagger } from 'motion';
import { onMounted } from 'vue';

let tiles = [
  {
    image: '/img/tiles/1.jpg', title: 'Наши обьекты',
    grow: 1,
  },

  {
    image: '/img/tiles/2.jpg', title: 'Квартира дня',
    grow: 2,
  },

  {
    image: '/img/tiles/3.jpg', title: 'Дюплексы Новая Заря',
    grow: 1,
  },

  {
    image: '/img/tiles/4.jpg', title: 'ЖК Новая Заря',
    grow: 3,
  },

  {
    image: '/img/tiles/5.jpg', title: 'Новые Сады',
    grow: 1,
  },

  {
    image: '/img/tiles/6.jpg', title: 'Вектор Успеха',
    grow: 2,
  },

  {
    image: '/img/tiles/7.jpg', title: 'Тротуарная плитка',
    grow: 1,
  },

  {
    image: '/img/tiles/8.jpg', title: 'Акции и скидки',
    grow: 1,
  },

]

onMounted(() => {
  animate(
    '.tile',
    { opacity: [0, 1], translateX: [-100, 0] },
    { duration: 1,  delay: stagger(0.2)}
  )
})

</script>


<template>
  <div class="tile__holder">
    <div class="tile" v-for="item of tiles" :key="item.title"
    :style="`flex-grow: ${item.grow}`"
    >
      <img class="tile__img" :src="item.image" alt="">
      <p class="tile__text">{{ item.title }}</p>
    </div>
  </div>
</template>

<style>

.tile__holder {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
}

.tile {
  position: relative;

  display: flex;
  justify-content: stretch;
  align-items: end;

  width: 300px; height: 200px;
  border: 2px solid white;
  border-radius: 4px;

  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, .5);
}

.tile__img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 200px;

  object-fit: cover;
  object-position: center;
}


.tile__text {
  margin: 0; padding: 20px 10px;
  background: rgba(255, 255, 255, .9);
  width: 100%;

  position: relative;
}

</style>