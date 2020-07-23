<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
