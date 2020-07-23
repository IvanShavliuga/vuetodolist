<template>
  <div class="home">
    <div class="home__header">
      <img class="header__logo" alt="Vue logo" src="../assets/logo.png">
      <h1 class="header__title">Vue.js todo list</h1>
    </div>
    <div class="header__filter">
      <span class="header__filter-all"
        :style="(filterMask==='all')?('color:#982112'):('')"
        @click="filterChange('all')">
        Все
      </span>
      <span class="header__filter-done"
        :style="(filterMask==='complete')?('color:#982112'):('')"
        @click="filterChange('complete')">
        Выполнено
      </span>
      <span class="header__filter-queque"
        :style="(filterMask==='incomplete')?('color:#982112'):('')"
        @click="filterChange('incomplete')">
        На очереди
      </span>
    </div>
    <div v-if="filteredTodos.length">
      <TodoItem v-for="(t,k) in filteredTodos" :todo="t" :key="k"/>
    </div>
    <div v-else>
      <p>Нет задач в списке</p>
    </div>
  </div>
</template>
<script>
import TodoItem from '@/components/TodoItem.vue'
import {mapGetters} from 'vuex'
import Vuex from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      filter: 'all'
    }
  },
  methods: Vuex.mapActions([
    "filterChange"
  ]),
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters([
        'filteredTodos',
        'filterMask'
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
.header__filter {
  padding: 15px;
  margin: 0;
  color: #555;
  text-align: left;
  width: 100%;
}
.header__filter span {
  margin: 0 15px;
  font-size: 20px;
  cursor: pointer;
}
</style>
