<script setup>
  import { ref } from 'vue';

  let slideInviz = false

  let activeSlide = ref({
    img: '/public/img/1.jpg', title: 'Slide title',
    footNote: 'footNote',
    })


  let slides = [
    {
      img: '/public/img/1.jpg', title: 'Slide title',
      footNote: 'footNote',
      buttons: [ 'button text', 'button text' ],
    },

    {
      img: '/public/img/2.jpg', title: 'Slide title',
      footNote: 'footNote',
      buttons: [ 'button text', 'button text' ],
    },

    {
      img: '/public/img/3.jpg', title: 'Slide title',
      footNote: 'footNote',
      buttons: [ 'button text', 'button text' ],
    },

    {
      img: '/public/img/4.jpg', title: 'Slide title',
      footNote: 'footNote',
      buttons: [ 'button text', 'button text' ],
    },

    {
      img: '/public/img/5.jpg', title: 'Slide title',
      footNote: 'footNote',
      buttons: [ 'button text', 'button text' ],
    },

    {
      img: '/public/img/6.jpg', title: 'Slide title',
      footNote: 'footNote',
      buttons: [ 'button text', 'button text' ],
    },
  ]



  async function sleep (seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
  }

  async function setActiveSlide (item) {
    slideInviz = true
    // await sleep(.5)
    // activeSlide.value = item
    // slideInviz = false

    console.log({item});
    console.log(activeSlide);
  }

</script>

<template>
  <div class="slider__holder">
    <div class="slider__main" :key="activeSlide.img"
      :class="{ 'slider__main_inviz': slideInviz }"
    >
      <img class="slider__mainImg" :src="activeSlide.img" alt="">
      <div class="slider__mainCover"></div>
      <p class="slider__mainTitle">{{ activeSlide.title }}</p>
      <p class="slider__mainNote">{{ activeSlide.footNote }}</p>
    </div>

    <ul class="slider__thumbList">
      <li class="slider__thumbItem" 
        v-for="item of slides" :key="item.img"
        @click="setActiveSlide(item)"
      >
        <img class="slider__thumbImg" :src="item.img">
      </li>
    </ul>
  </div>
</template>

<style>
.slider__holder {
  padding: 20px;
}

.slider__main {
  position: relative;
  width: 100%; height: 60vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 6px;
  overflow: hidden;

  box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, .6);
  transition: .5s;
}

.slider__main_inviz {
  opacity: 0;
}

.slider__mainImg {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 60vh;

  object-fit: cover;
  object-position: center;
}

.slider__mainCover {
  position: absolute;
  top: 0; left: 0;
  bottom: 0; right: 0;

  background: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0), 
    rgba(0, 0, 0, .4),
    rgba(0, 0, 0, .6)
  )
}

.slider__mainTitle {
  position: relative;
  color: white;
  font-size: 40px;
  font-weight: 600;
  padding: 40px 20px 20px 20px;
  margin: 0;
}

.slider__mainNote {
  position: relative;
  color: white;
  font-size: 30px;
  padding: 20px; margin: 0;
}

.slider__thumbList {
  display: flex;
  gap: 10px;


  list-style: none;
  margin: 0; padding: 20px 0;
}

.slider__thumbItem {
  width: 150px; height: 150px;
  flex-grow: 1;

  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .6);
}

.slider__thumbImg {
  width: 100%; height: 150px;
  object-fit: cover; object-position: center;
  filter: brightness(0.8);
  cursor: pointer;
}

</style>