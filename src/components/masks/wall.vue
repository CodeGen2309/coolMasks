<script setup>
import { animate, stagger } from "motion"
import { onMounted } from "vue"

function mountedAnim () {
  animate(
    '.wallm__part',
    { 
      translateY: [-1, 0],
    },
    { duration: 1.6, delay: stagger(0.01) }
  )
}


function  staticAnim () {
  animate(
    '.wallm__part',
    {  scaleX: [1, 1.2, 1], },
    { duration:15, repeat:Infinity, delay: stagger(0.3), easing: "linear" }
  )

}


function exitAnim () {
  animate(
    '.wallm__part',
    {  translateX: [0, 5] },
    { duration: 4, delay: stagger(0.03) }
  )


  animate(
    '.wallm__img',
    {  opacity: [1, 0] },
    { duration: 3 }
  )
}


onMounted(() => { 
  mountedAnim()
  staticAnim()
  // exitAnim()
})

</script>


<template>
  <div class="wallm">
    <img class="wallm__img" src="/mainImages/17.jpg" alt="">

      <svg xmlns="http://www.w3.org/2000/svg">
        <clipPath id="wallm" clipPathUnits="objectBoundingBox">
          <rect class="wallm__part" x="0.137207" y="0.47998" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.137207" y="0.680054" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.0517578" y="0.22998" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.477051" y="0.280029" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.307129" y="0.579956" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.137207" y="0.380005" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.307129" y="0.180054" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.646973" y="0.380005" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.307129" y="0.380005" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.307129" y="0.280029" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.731934" y="0.530029" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.731934" y="0.72998" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.646973" y="0.180054" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.477051" y="0.47998" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.477051" y="0.680054" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.477051" y="0.0799561" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.307129" y="0.47998" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.307129" y="0.680054" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.222168" y="0.22998" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.222168" y="0.130005" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.646973" y="0.280029" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.477051" y="0.380005" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.477051" y="0.579956" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.477051" y="0.780029" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.222168" y="0.329956" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.137207" y="0.180054" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.477051" y="0.180054" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.646973" y="0.47998" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.646973" y="0.680054" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.646973" y="0.0799561" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.39209" y="0.430054" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.39209" y="0.630005" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.816895" y="0.579956" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.816895" y="0.780029" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.307129" y="0.0799561" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.731934" y="0.22998" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.222168" y="0.530029" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.0517578" y="0.329956" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.562012" y="0.329956" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.137207" y="0.280029" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.39209" y="0.22998" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.731934" y="0.430054" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.731934" y="0.630005" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.39209" y="0.329956" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.816895" y="0.47998" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.816895" y="0.680054" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.731934" y="0.130005" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.562012" y="0.530029" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.562012" y="0.72998" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.562012" y="0.130005" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.222168" y="0.430054" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.222168" y="0.630005" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.646973" y="0.579956" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.646973" y="0.780029" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.562012" y="0.22998" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.39209" y="0.530029" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.39209" y="0.72998" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.39209" y="0.130005" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.731934" y="0.329956" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.562012" y="0.430054" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.562012" y="0.630005" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.816895" y="0.380005" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.816895" y="0.280029" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.816895" y="0.180054" width="0.16" height="0.04" fill="white"/>
          <rect class="wallm__part" x="0.816895" y="0.0799561" width="0.16" height="0.04" fill="white"/>
        </clipPath>
      </svg>


  </div>  
</template>


<style>
.wallm {
  position: relative;
  width: 100%;
}

.wallm__img {
  position: absolute;
  top: 0; right: 0;

  height: 80vh;
  width: 90%;
  object-fit: cover;
  object-position: bottom;
  clip-path: url(#wallm);
}

#wallm {
  transform: translateY(-50px) scaleX(1.3) translateX(-200px);
}

.wallm__part {
  transform-box: fill-box;
  transform-origin: center;
  -moz-transform-box: fill-box;
  -moz-transform-origin: center;
}
</style>