<template>
  <div id="app">
    <!--<Modal/>-->
    <router-view/>
    <p class="copyright">(C) 2020 <a href="https://github.com/IvanShavliuga">Ivan Ivanov (Shavliuga)</a>, Belarus, Novopolotsk</p>
  </div>
</template>
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
.copyright a, .copyright a:visited{
  color: #42b983;
}
</style>
