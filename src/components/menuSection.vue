<script setup>

let menu = [
  { link: '#', text: 'Корпорация' },
  { link: '#', text: 'Недвижимость' },
  { link: '#', text: 'Строительные материалы' },
  { link: '#', text: 'ЖНК' },
]

</script>



<template>
  <div class="smenu">
    <ul class="smenu__list">
      <li class="smenu__listItem"
        v-for="item in menu" :key="item.link"
      >
      <a class="smenu__link" :href = "item.link">
        {{ item.text }}
      </a>
      </li>
    </ul>
  </div>
</template>

<style>
.smenu {
  position: absolute;
  top: 60px; left: 0;
  bottom: 0;
  background: white;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, .4);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  transition: .3s;
}

.smenu__list {
  list-style: none;
  margin: 0; padding: 0 60px;
}

.smenu__listItem {

}

.smenu__link {
  display: block;
  text-decoration: none;
  color: inherit;
  text-align: center;

  padding: 30px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  transition: .3s;
}

</style>