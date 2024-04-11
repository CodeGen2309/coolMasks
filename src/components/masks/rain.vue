<script setup>
import { animate, stagger } from "motion"
import { onMounted } from "vue"

function mountedAnim () {
  animate(
    '.rainpart',
    { 
      // transform: ['scaleY(0)', 'scaleY(1)'],
      scaleY: [0, 1]
    },

    {duration:2, delay: stagger(0.05)}
  )
}


async function  staticAnim () {
  setTimeout(() => {
    animate(
      '.rainpart',
      { 
        scaleX: [1, 1.3, 1.1, 1.4, 1]
      },
      { duration:15, repeat:Infinity, delay: stagger(0.1), easing: "linear" }
    )
  }, 5000);

}


onMounted(() => { 
  mountedAnim()
  staticAnim()
})

</script>


<template>
  <div class="rainm">
    <img class="rainm__img" src="/img/4.jpg" alt="" />

    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="rainm" clipPathUnits="objectBoundingBox">
        <rect class="rainpart" width="0.02" height="0.711" fill="black"/>
        <rect class="rainpart" x="0.324951" width="0.02" height="0.711" fill="black"/>
        <rect class="rainpart" x="0.649902" width="0.02" height="0.711" fill="black"/>
        <rect class="rainpart" x="0.175049" width="0.02" height="0.8" fill="black"/>
        <rect class="rainpart" x="0.5" width="0.02" height="0.8" fill="black"/>
        <rect class="rainpart" x="0.824951" width="0.02" height="0.8" fill="black"/>
        <rect class="rainpart" x="0.149902" width="0.02" height="0.839" fill="black"/>
        <rect class="rainpart" x="0.475098" width="0.02" height="0.839" fill="black"/>
        <rect class="rainpart" x="0.800049" width="0.02" height="0.839" fill="black"/>
        <rect class="rainpart" x="0.125" width="0.02" height="0.813" fill="black"/>
        <rect class="rainpart" x="0.449951" width="0.02" height="0.813" fill="black"/>
        <rect class="rainpart" x="0.774902" width="0.02" height="0.813" fill="black"/>
        <rect class="rainpart" x="0.300049" width="0.02" height="0.839" fill="black"/>
        <rect class="rainpart" x="0.625" width="0.02" height="0.839" fill="black"/>
        <rect class="rainpart" x="0.949951" width="0.02" height="0.839" fill="black"/>
        <rect class="rainpart" x="0.100098" width="0.02" height="0.775" fill="black"/>
        <rect class="rainpart" x="0.425049" width="0.02" height="0.775" fill="black"/>
        <rect class="rainpart" x="0.75" width="0.02" height="0.775" fill="black"/>
        <rect class="rainpart" x="0.274902" width="0.02" height="0.729" fill="black"/>
        <rect class="rainpart" x="0.600098" width="0.02" height="0.729" fill="black"/>
        <rect class="rainpart" x="0.925049" width="0.02" height="0.729" fill="black"/>
        <rect class="rainpart" x="0.0749512" width="0.02" height="0.8" fill="black"/>
        <rect class="rainpart" x="0.399902" width="0.02" height="0.8" fill="black"/>
        <rect class="rainpart" x="0.725098" width="0.02" height="0.8" fill="black"/>
        <rect class="rainpart" x="0.25" width="0.02" height="0.813" fill="black"/>
        <rect class="rainpart" x="0.574951" width="0.02" height="0.813" fill="black"/>
        <rect class="rainpart" x="0.899902" width="0.02" height="0.813" fill="black"/>
        <rect class="rainpart" x="0.0500488" width="0.02" height="0.813" fill="black"/>
        <rect class="rainpart" x="0.375" width="0.02" height="0.813" fill="black"/>
        <rect class="rainpart" x="0.699951" width="0.02" height="0.813" fill="black"/>
        <rect class="rainpart" x="0.225098" width="0.02" height="0.695" fill="black"/>
        <rect class="rainpart" x="0.550049" width="0.02" height="0.695" fill="black"/>
        <rect class="rainpart" x="0.875" width="0.02" height="0.695" fill="black"/>
        <rect class="rainpart" x="0.0249023" width="0.02" height="0.751" fill="black"/>
        <rect class="rainpart" x="0.350098" width="0.02" height="0.751" fill="black"/>
        <rect class="rainpart" x="0.675049" width="0.02" height="0.751" fill="black"/>
        <rect class="rainpart" x="0.199951" width="0.02" height="0.74" fill="black"/>
        <rect class="rainpart" x="0.524902" width="0.02" height="0.74" fill="black"/>
        <rect class="rainpart" x="0.850098" width="0.02" height="0.74" fill="black"/>
      </clipPath>
    </svg>

  </div>  
</template>


<style>
.rainm {
  position: relative;
  width: 100%;
  height: 500px;
}


.rainm__img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: center;
  clip-path: url(#rainm);
}

#rainm {
  /* transform-box: fill-box; */
  /* transform-origin: center; */

  transform: rotate(30deg)  translateY(-600px) translateX(300px) scale(2);
}

.rainpart {
  transform-box: fill-box;
  transform-origin: center top;
}
</style>