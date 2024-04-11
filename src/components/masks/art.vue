<script setup>
import { animate, stagger, timeline } from "motion"
import { onMounted } from "vue"

function mountedAnim () {
  animate(
    '.upAnim',
    { 
      translateY: [0.1, 0],
    },
    { duration: 2 }
  )

  animate(
    '.cover__img',
    { opacity: [0, 1] },
    { duration: 2 }
  )

  animate(
    '.downAnim',
    { translateY: [-0.1, 0] },
    { duration: 2 }
  )
}


function  staticAnim () {
  animate(
    '.mpart',
    { 
      scale: [1.03, 1.12, 1.03],
      // translateY: [ 0, 0.05, -0.05, 0 ]
    },
    { duration:10, repeat:Infinity, delay: stagger(0.1), easing: "linear" }
  )

}


onMounted(() => { 
  mountedAnim()
  staticAnim()
})

</script>


<template>
  <div class="cover">
    <img class="cover__img" src="/img/4.jpg" alt="">

    <svg xmlns="http://www.w3.org/2000/svg" width="0" heigth="0">
      <clipPath id="artm" clipPathUnits="objectBoundingBox">
        <rect class="mpart upAnim" x="0.942871" y="0.148315" width="0.0520526" height="0.70438" fill="black"/>
        <rect class="mpart downAnim" x="0.00610352" y="0.148315" width="0.0520526" height="0.70438" fill="black"/>
        <rect class="mpart downAnim" x="0.884277" y="0.139709" width="0.0520526" height="0.72156" fill="black"/>
        <rect class="mpart upAnim" x="0.0644531" y="0.139709" width="0.0520526" height="0.72156" fill="black"/>
        <rect class="mpart upAnim" x="0.825928" y="0.131104" width="0.0520526" height="0.73874" fill="black"/>
        <rect class="mpart downAnim" x="0.123047" y="0.131104" width="0.0520526" height="0.73874" fill="black"/>
        <rect class="mpart downAnim" x="0.767334" y="0.122559" width="0.0520526" height="0.75592" fill="black"/>
        <rect class="mpart upAnim" x="0.181641" y="0.122559" width="0.0520526" height="0.75592" fill="black"/>
        <rect class="mpart upAnim" x="0.70874" y="0.105347" width="0.0520526" height="0.79028" fill="black"/>
        <rect class="mpart downAnim" x="0.240234" y="0.105347" width="0.0520526" height="0.79028" fill="black"/>
        <rect class="mpart downAnim" x="0.650146" y="0.0967407" width="0.0520526" height="0.80746" fill="black"/>
        <rect class="mpart upAnim" x="0.298828" y="0.0967407" width="0.0520526" height="0.80746" fill="black"/>
        <rect class="mpart upAnim" x="0.591553" y="0.0881958" width="0.0520526" height="0.82464" fill="black"/>
        <rect class="mpart downAnim" x="0.357422" y="0.0881958" width="0.0520526" height="0.82464" fill="black"/>
        <rect class="mpart downAnim" x="0.532959" y="0.0795898" width="0.0520526" height="0.84182" fill="black"/>
        <rect class="mpart upAnim" x="0.416016" y="0.0795898" width="0.0520526" height="0.84182" fill="black"/>
        <rect class="mpart upAnim" x="0.474365" y="0.0709839" width="0.0520526" height="0.859" fill="black"/>
      </clipPath>
    </svg>

  </div>  
</template>


<style>
.cover {
  width: 100%;
}

.cover__img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: center;
  clip-path: url(#artm);
}

.mpart {
  transform-box: fill-box;
  transform-origin: center;
}
</style>