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

  <div class="header__phone">
    <img class="header__phoneImg" src="/mainIcons/phone.png">
    <p class="header__phoneText"> +7 (4722) 37-63-33 </p>
  </div>


  <transition name = 'sideFade'>
      <menuSection class="mainMenu"
        :menu="tMenu.mainMenu" v-show = "isMenuShow"
        @hover="changeSubMenu"
      >
      </menuSection>
  </transition>

  <transition name = 'sideFade'>
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
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0 6px 10px 2px rgba(0, 0, 0, .2);
  background: white;
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
  /* background: rgb(107, 172, 236); */
  background: rgba(72, 126, 176, .7);
  padding: 20px 50px;
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
  display: flex;
  align-items: center;
  gap: 4px;
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
  bottom: 0;

  transition: .3s;
}

.subMenu {
  position: absolute;
  top: 60px; left: 400px;
  bottom: 0;
  z-index: 999;

  transition: .3s;
}


.header__menuIcon {
  width: 20px;
  cursor: pointer;
  padding-left: 20px;
}

.sideFade-enter-active,
.sideFade-leave-active {
  transform: translateX(-50px);
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