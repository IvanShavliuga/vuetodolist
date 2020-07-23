<template>
  <ul class="nav">
    <li class="nav__item">Vue.js | список задач</li>
    <li class="nav__item">
      <router-link to="/">Список задач</router-link></li>
    <li class="nav__item" @click.prevent="addTodo">
      <router-link to="/edit">Добавить задачу</router-link>
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
</style>
