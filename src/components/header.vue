<script setup>
</script>


<template>
<header class="header">
  <img class="header__logo" src="/icons/ZHBK_logo 1.svg">

  <ul class="header__menu">
    <li class="header__menuItem">
      <router-link  class="header__menuLink" to="/zavod">
        завод
      </router-link>
    </li>
    <li class="header__menuItem">
      <router-link class="header__menuLink" to="/real-estate">
        недвижимость
      </router-link>
    </li>
    <li class="header__menuItem">
      <router-link class="header__menuLink" to="/">
        копорация
      </router-link>
    </li>
    <li class="header__menuItem">
      акции
    </li>
    <li class="header__menuItem">
      контакты
    </li>
  </ul>

  <img class="header__menuIcon" src="/icons/heroicons-solid_menu.svg" alt="">
</header>
</template>

<style>

.header {
  display: flex;
  align-items: center;

  padding: 10px 20px;
  box-sizing: border-box;
  box-shadow: 0 6px 10px 2px rgba(0, 0, 0, .4);
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
  padding: 10px 30px;
  cursor: pointer;
  transition: .3s;
}

.header__menuItem:hover {
  background: rgba(0, 0, 0, .4);
  color: white;
}

.header__menuLink {
  text-decoration: none;
  color: inherit;  
}


.header__menuIcon {
  width: 20px;
}

</style>