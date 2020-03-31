<template>
  <div id="app">
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/Navigation.vue'
// import Numbers from './components/Numbers.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    // Numbers
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
