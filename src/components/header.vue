<script setup>
import menuSection from "@/components/menuSection.vue"

import tMenu from '../../mocks/mainMenu.json'
import { ref } from "vue";

let isMenuShow = ref(false)
let isSubMenuShow = ref(false)
let subMenu = ref({})


let HeadLinks = [
  { link: '/zavod', text: 'Завод' },
  { link: '/', text: 'Корпорация ЖБК - 1' },
  { link: '/real-estate', text: 'Недвижимость' },
]


function toggleMenu () {
  if (isMenuShow.value) {
    isMenuShow.value = false
    isSubMenuShow.value = false
  }

  else {
    isMenuShow.value = true
  }
}


function changeSubMenu (menuItem) {
  let newMenu = {
    cover: menuItem.img,
    name: menuItem.subMenu,
  }

  isSubMenuShow.value = false
  
  setTimeout(() => {
    subMenu.value = newMenu
    isSubMenuShow.value = true
  }, 200)
}

</script>



<template>
<header class="header">
  <div class="header__left">
    <div class="header__inner">
      <img class="header__logo" src="/mainIcons/ZHBK_logo1.svg">

      <img class="header__menuIcon" 
        src="/mainIcons/heroicons-solid_menu.svg"
        @click="toggleMenu()"
      >

      <ul class="header__menu">
        <RouterLink  v-for="item in HeadLinks" :key="item.link"
          class="header__menuItem header__menuLink"
          :to="item.link"
        > 
        {{ item.text }}
        </RouterLink>    
      </ul>
    </div>
  </div>


  <div class="header__phone">
    <div class="header__phone__inner">
      <img class="header__phoneImg" src="/mainIcons/phone.png">
      <p class="header__phoneText"> +7 (4722) 37-63-33 </p>
    </div>
  </div>


  <transition name = 'sideFade'>
      <menuSection class="mainMenu"
        :menu="tMenu.mainMenu" v-if = "isMenuShow"
        @hover="changeSubMenu"
      >
      </menuSection>
  </transition>

  <transition name = 'subFade'>
      <menuSection class="subMenu"
      :menu="tMenu[subMenu.name]"
      :cover="subMenu.cover"
        v-show="isSubMenuShow"
      >
      </menuSection>
  </transition>
</header>
</template>



<style>

.header {
  position: absolute;
  width: 100%;

  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 20px;

  box-sizing: border-box;
  z-index: 9;
}

.header__left {
  transform: skewX(-40deg);
  background: white;
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, .1);
  margin-left: -40px;
  padding: 0 40px;
}

.header__left:hover .header__menuItem{
  padding: 20px 40px;
}

.header__inner {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 20px;

  transform: skewX(40deg);
}



.header__logo {
  width: 30px;
}

.header__menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  list-style: none;
  margin: 0; padding: 0;
  flex-grow: 1;
}

.header__menuItem {
  padding: 20px;
  font-weight: 100;
  cursor: pointer;
  transition: .3s;
}


.header__menuItem:hover {
  background: rgba(72, 126, 176, .7);
  color: white;
  font-weight: 500;
}

.header__menuLink {
  text-decoration: none;
  color: inherit;  
}

.header__decider {
  width: 1px; height: 40px;
  background: rgba(0, 0, 0, .2);
}

.header__phone {
  background: white;
  transform: skewX(40deg);
  padding: 10px 60px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, .1);
  margin-right: -40px;
}


.header__phone__inner {
  display: flex;
  align-items: center;
  gap: 4px;

  transform: skewX(-40deg);
}


.header__phoneImg {
  opacity: 0.7;
  width: 30px;
}

.header__phoneText {
  font-weight: 100;
  margin: 0; padding: 0;
}


.mainMenu {
  position: absolute;
  top: 60px; left: 0;
  width: 300px;
  margin: 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, .8);
  backdrop-filter: blur(10px);

  transition: .3s;
}

.mainMenu::-webkit-scrollbar {
  display: none;
}

.mainMenu li {
}

.mainMenu a {
  margin: 0; padding: 20px;
}

.subMenu {
  position: absolute;
  top: 60px; left: 320px;
  bottom: 0;
  z-index: 999;
  margin: 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, .8);
  backdrop-filter: blur(10px);
  width: 400px;

  transition: .3s;
}

.subMenu::-webkit-scrollbar {
  display: none;
}



.header__menuIcon {
  width: 20px;
  cursor: pointer;
  padding-left: 20px;
}

.sideFade-enter-active,
.sideFade-leave-active {
  transform: translateY(-100px);
  opacity: 0;
}

.subFade-enter-active,
.subFade-leave-active {
  transform: translateX(-20px);
  opacity: 0;
}


@media (max-width: 500px) {
  .header {
    justify-content: space-between;
    padding: 30px;
  }

  .header__menu {
    display: none;
  }
}

</style>