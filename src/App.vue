<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://pinia.vuejs.org/" target="_blank">
      <img src="./assets/pinia.svg" class="logo pinia" alt="Pinia logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + Pinia" />
  <router-link :to="{ name: 'home' }" class="navbar-brand">HOME</router-link>
  <div>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item" style="list-style-type: none; margin: 0 40px 0 0; ">
        <router-link :to="{ name: 'posts.index' }" class="nav-link active" aria-current="page">POSTS</router-link
        >
      </li>
    </ul>
  </div>

  <!--- render router view -->
  <router-view></router-view>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.pinia:hover {
  filter: drop-shadow(0 0 2em #b8ac42aa);
}
</style>
