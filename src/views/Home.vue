<template>
  <div class="home">
    <div class="home__header">
      <img class="header__logo" alt="Vue logo" src="../assets/logo.png">
      <h1 class="header__title">Vue.js todo list</h1>
    </div>
    <TodoItem v-for="(t,k) in filteredTodos" :todo="t" :key="k"/>
  </div>
</template>
<script>
import TodoItem from '@/components/TodoItem.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'Home',
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters([
        'filteredTodos'
    ])
  }
}
</script>
<style>
.home {
  margin: 0 auto;
  padding: 0;
  width: 80%;
}
.home__header {
  margin: 0;
  padding: 0;
}
.header__title {
  font-size: 36px;
  font-weight: normal;
  color: #353498;
}
.header__logo {
  width: 60px;
  height: 80px;
  margin-right: 20px;
}

</style>
