<script setup>
import { animate, stagger } from 'motion';
import { onMounted } from 'vue';

defineProps([ 'tiles' ])


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
  width: 100%; height: 200px;

  object-fit: cover;
  object-position: center;
}


.tile__text {
  margin: 0; padding: 20px 10px;
  background: rgba(255, 255, 255, .9);
  width: 100%;

  position: relative;
  transition: .3s;
}

</style>