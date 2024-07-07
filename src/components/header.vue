<script setup>
import menuSection from "@/components/menuSection.vue"
import { ref } from "vue";

let isMenuShow = ref(false)

let HeadLinks = [
  { link: '/zavod', text: 'Завод' },
  { link: '/', text: 'Корпорация ЖБК - 1' },
  { link: '/real-estate', text: 'Недвижимость' },
]

</script>


<template>
<header class="header">
  <img class="header__menuIcon" 
    src="/mainIcons/heroicons-solid_menu.svg"
    @click="isMenuShow = !isMenuShow"
  >

  <ul class="header__menu">
    <RouterLink to="/zavod"
      class="header__menuItem header__menuLink"
    > 
    Завод
    </RouterLink>

    <!-- <div class="header__decider"></div> -->
    
    <RouterLink to="/"
      class="header__menuItem header__menuLink"
    > 
    Корпорация ЖБК - 1
    </RouterLink>

    <!-- <div class="header__decider"></div> -->
    
    <RouterLink to="/real-estate"
      class="header__menuItem header__menuLink"
    > 
    Недвижимость
    </RouterLink>    
  </ul>

  <img class="header__logo" src="/mainIcons/ZHBK_logo1.svg">


  <transition name = 'sideFade'>
      <menuSection class="mainMenu" v-show = "isMenuShow"></menuSection>
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