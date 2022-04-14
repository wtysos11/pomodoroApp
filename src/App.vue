<template>
  <div id="app">
    <vHeader/>
    <p>Home Page</p>
    <!-- <img alt="Vue logo" src="https://vuejs.org/images/logo.png">
    <nav>
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> | 
      <router-link to="/contact">Contact</router-link>
    </nav>
    <main>
      
    </main> -->
  </div>
</template>

<script>
import vHeader from "./components/Header.vue"
export default {
  components: {
    vHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
