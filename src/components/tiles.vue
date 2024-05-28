<script setup>
import { animate, stagger } from 'motion';
import { onMounted } from 'vue';

defineProps([ 'tiles' ])

let tilesBkp = [
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
    <a class="tile" v-for="item of tiles" :key="item.title"
    :href="item.link"
    :style="`${item.style}`"
    >
      <img class="tile__img" :src="item.image" alt="">
      <p class="tile__text">{{ item.title }}</p>
    </a>
  </div>
</template>

<style>

.tile__holder {
  display: grid;
  grid-auto-flow: column dense;

  gap: 10px;
  padding: 20px;
}

.tile {
  position: relative;
  min-width: 200px;

  display: flex;
  justify-content: stretch;
  align-items: end;

  border: 2px solid white;
  border-radius: 4px;

  text-decoration: none;
  color: inherit;


  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, .5);
  transition: .3s;
  cursor: pointer;
}

.tile:hover {
  border: 2px solid rgba(116, 185, 255, 1);
}

.tile:hover .tile__text {
  background: rgba(116, 185, 255, 1);
  font-weight: 500;
  color: white;
}



.tile__img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;

  object-fit: cover;
  object-position: center;
}


.tile__text {
  margin: 0; padding: 20px 10px;
  background: rgba(255, 255, 255, .9);
  font-weight: 400;
  width: 100%;

  position: relative;
  transition: .3s;
}


@media (max-width: 500px) {
  .tile__holder {
    grid-auto-flow: row dense;
  }

  .tile {
    min-height: 200px;
    min-width: 50px;
  }
}
</style>