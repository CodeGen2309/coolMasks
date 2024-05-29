<script setup>
import { animate, stagger } from "motion"
import { onMounted } from "vue"

function mountedAnim () {
  animate(
    '.rainpart',
    { scaleY: [0, 2] },
    { duration:2, delay: stagger(0.1) }
  )
}


async function  staticAnim () {
  setTimeout(() => {
    animate(
      '.rainpart',
      { scaleX: [1, 1.2, 1] },
      { duration:10, repeat:Infinity, delay: stagger(0.4), easing: "linear" }
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
    <img class="rainm__img" src="/mainImages/13.jpg" alt="" />

    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="rainm" clipPathUnits="objectBoundingBox">
        <rect class="rainpart fadeUp" width="0.0200005" height="0.913" fill="black"/>
        <rect class="rainpart fadeDown" x="0.352051" width="0.0200005" height="0.8" fill="black"/>
        <rect class="rainpart fadeUp" x="0.176025" width="0.0200005" height="0.687" fill="black"/>
        <rect class="rainpart fadeDown" x="0.528076" width="0.0200005" height="0.634" fill="black"/>
        <rect class="rainpart fadeUp" x="0.0878906" width="0.0200005" height="0.8" fill="black"/>
        <rect class="rainpart fadeDown" x="0.439941" width="0.0200005" height="0.634" fill="black"/>
        <rect class="rainpart fadeUp" x="0.263916" width="0.0200005" height="0.653" fill="black"/>
        <rect class="rainpart fadeDown" x="0.0439453" width="0.0200005" height="0.8" fill="black"/>
        <rect class="rainpart fadeUp" x="0.395996" width="0.0200005" height="0.748" fill="black"/>
        <rect class="rainpart fadeDown" x="0.219971" width="0.0200005" height="0.669" fill="black"/>
        <rect class="rainpart fadeUp" x="0.13208" width="0.0200005" height="0.762" fill="black"/>
        <rect class="rainpart fadeDown" x="0.484131" width="0.0200005" height="0.634" fill="black"/>
        <rect class="rainpart fadeUp" x="0.308105" width="0.0200005" height="0.653" fill="black"/>
        <rect class="rainpart fadeDown" x="0.0219727" width="0.0200005" height="0.862" fill="black"/>
        <rect class="rainpart fadeUp" x="0.374023" width="0.0200005" height="0.687" fill="black"/>
        <rect class="rainpart fadeDown" x="0.197998" width="0.0200005" height="0.634" fill="black"/>
        <rect class="rainpart fadeUp" x="0.550049" width="0.0200005" height="0.687" fill="black"/>
        <rect class="rainpart fadeDown" x="0.110107" width="0.0200005" height="0.817" fill="black"/>
        <rect class="rainpart fadeUp" x="0.461914" width="0.0200005" height="0.669" fill="black"/>
        <rect class="rainpart fadeDown" x="0.285889" width="0.0200005" height="0.706" fill="black"/>
        <rect class="rainpart fadeUp" x="0.065918" width="0.0200005" height="0.73" fill="black"/>
        <rect class="rainpart fadeDown" x="0.417969" width="0.0200005" height="0.669" fill="black"/>
        <rect class="rainpart fadeUp" x="0.241943" width="0.0200005" height="0.687" fill="black"/>
        <rect class="rainpart fadeDown" x="0.154053" width="0.0200005" height="0.73" fill="black"/>
        <rect class="rainpart fadeUp" x="0.506104" width="0.0200005" height="0.669" fill="black"/>
        <rect class="rainpart fadeDown" x="0.330078" width="0.0200005" height="0.721" fill="black"/>
      </clipPath>
    </svg>

  </div>  
</template>


<style>
.rainm {
  position: relative;
  width: 100%;
  height: 90vh;
}


.rainm__img {
  position: absolute;
  right: 0;
  width: 100%; height: 80vh;
  object-fit: cover;
  object-position: right;
  clip-path: url(#rainm);
}

#rainm {
  transform-box: fill-box;
  transform-origin: center;
  -moz-transform-origin: center;
  -moz-transform-box: fill-box;

  transform: rotate(20deg)  translateY(-650px) translateX(400px) scaleX(1.6);
  /* transform: rotate(60deg)  translateY(-1700px) translateX(100px) scale(1.3); */
}

.rainpart {
  transform-box: fill-box;
  transform-origin: center top;
  -moz-transform-box: fill-box;
  -moz-transform-origin: center top;
}
</style>