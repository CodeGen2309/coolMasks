<script setup>
</script>


<template>
<header class="header">
  <img class="header__logo" src="/icons/ZHBK_logo 1.svg">

  <ul class="header__menu">
    <router-link  class="header__menuLink header__menuItem" to="/zavod">
      Завод
    </router-link>
    
    <router-link class="header__menuLink header__menuItem" to="/">
      Корпорация ЖБК - 1
    </router-link>

    <router-link class="header__menuLink header__menuItem" to="/real-estate">
      Недвижимость
    </router-link>
  </ul>

  <img class="header__menuIcon" src="/icons/heroicons-solid_menu.svg" alt="">
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
  background: rgb(107, 172, 236);
  padding: 20px 50px;
  color: white;
}

.header__menuLink {
  text-decoration: none;
  color: inherit;  
}


.header__menuIcon {
  width: 20px;
  cursor: pointer;
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