<template>
  <div id="app">
      <navbar activeLink="home"/>      
      <router-view></router-view>
      <footer-section/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
      'navbar' : Navbar,
      'footer-section' : Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
