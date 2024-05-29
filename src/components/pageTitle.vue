<script setup>
defineProps(['title'])

</script>


<template>
  <div class="ptitle__container">
    <p class="ptitle__text">{{ title }}</p>
    <img class="ptitle__decor" src="/mainIcons/titleDecor.svg" alt="">
  </div>
</template>


<style>
.ptitle {}

.ptitle__container {
  position: absolute;
  background: rgba(116, 185, 255, .9);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 30px;
  box-sizing: border-box;
}

.ptitle__text {
  position: absolute;
  color: white;
  font-weight: 500;
}

.ptitle__decor {
  max-width: 100%;
  max-height: 100%;

  object-fit: contain;
  object-position: center;
}

</style>