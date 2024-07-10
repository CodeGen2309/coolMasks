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

let menu = [
  { link: '#', text: 'Корпорация' },
  { link: '#', text: 'Недвижимость' },
  { link: '#', text: 'Строительные материалы' },
  { link: '#', text: 'ЖНК' },
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
  <img class="header__menuIcon" 
    src="/mainIcons/heroicons-solid_menu.svg"
    @click="toggleMenu()"
  >

  <ul class="header__menu">
    <RouterLink to="/zavod"
      class="header__menuItem header__menuLink"
    > 
    Завод
    </RouterLink>

    
    <RouterLink to="/"
      class="header__menuItem header__menuLink"
    > 
    Корпорация ЖБК - 1
    </RouterLink>

    
    <RouterLink to="/real-estate"
      class="header__menuItem header__menuLink"
    > 
    Недвижимость
    </RouterLink>    
  </ul>

  <img class="header__logo" src="/mainIcons/ZHBK_logo1.svg">


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
  justify-content: center;
  align-items: center;

  list-style: none;
  margin: 0; padding: 0;
  flex-grow: 1;
}

.header__menuItem {
  padding: 20px 30px;
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