<template>
  <ul class="nav">
    <li class="nav__item">Vue.js</li>
    <li class="nav__item">
      <router-link to="/">Список заметок</router-link></li>
    <li class="nav__item" @click.prevent="addTodo">
      <router-link to="/edit">Добавить заметку</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'NavBar',
  methods: {
    addTodo() {
      this.$store.dispatch("todoSelect", -1);
    }
  }
}
</script>
<style>
.nav {
  padding: 30px;
}
.nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 22px;
}
.nav a.router-link-exact-active {
  color: #42b983;
}
.nav__item {
  list-style: none;
  display: inline-block;
  margin: 0 25px;
  font-weight: bold;
  color: #2c3e50;
  font-size: 22px;
}
@media screen and (max-width: 500px) {
  .nav {
    padding: 5px;
    width: 100%;
  }
  .nav__item {
    margin: 0 5px;
    font-size: 18px;
  }
  .nav a {
    font-size: 18px;
  }
}
</style>
