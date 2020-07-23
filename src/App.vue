<template>
  <div id="app">
    <!--<Modal/>-->
    <NavBar/>
    <router-view/>
    <p class="copyright">(C) 2020 <a href="https://github.com/IvanShavliuga">Ivan Ivanov (Shavliuga)</a>, Belarus, Novopolotsk</p>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import Modal from '@/components/Modal.vue'
export default {
  components: {
    NavBar,
    Modal
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
  position: relative;
}
.copyright {
  color: #aaa;
  font-size: 16x;
  text-align: center;
}
</style>
