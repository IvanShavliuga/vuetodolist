<template>
  <div class="todo">
    <p class="todo__info">
      <span class="todo__id">#{{todo.id + 1}}</span>
      <span class="todo__title" v-if="mode=='read'">{{todo.title}}</span>
      <input class="todo__input"
        type="text"
        v-if="mode=='write'"
        v-model="todo.title"
      />
    </p>
    <p class="todo__status">
      <input type="checkbox"
        v-model="todo.done"
        v-if="mode=='write'"
      />
      <span :class="(todo.done)?('todo__done'):('')">
        {{(todo.done)?('выполнено'):('в очереди')}}
      </span>
      <button class="todo__button todo__delete"
        v-if="mode=='write'"
        @click="deleteTodo(todo.id)">
        Удалить
      </button>
    </p>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true
    },
    mode: {
      type: String,
      default: "read"
    }
  },
  data() {
    return {
      todoedit: []
    }
  },
  methods: {
    /*...mapActions([
        'deleteTodo'
    ])
    selectTodo() {
      this.$store.dispatch("todoSelect", this.todo.id);
      this.$router.push({ path: "/edit/" })
    },*/
    deleteTodo(id) {
      this.$emit("delete",id);
    }
  },
  created() {
    if(this.mode=='write')
      this.todoedit = this.todo;
  }
}
</script>
<style scoped>
.todo {
  border: 1px dotted #df98a0;
  font-size: 22px;
  padding: 0;
  margin: 15px;
  color: #342734;
}
.todo__id {
  padding-right: 10px;
}
.todo__body {
  background-color: #f0f0f0;
  padding: 15px 5px;
  margin: 0;
  text-align: justify;
}
.todo__info, .todo__status{
  padding: 5px  0;
  margin: 0;
  font-size: 18px;
  background-color: #d6f6f9;
  text-align: left;
}
.todo__status {
  display: flex;
  flex-wrap: wrap;
}
.todo__done {
  color: #389e27;
}
.todo__title {
  color: #672356;
}
.todo__input {
  height: 30px;
  font-size: 20px;
}
.todo__button {
  color: #2539a8;
  text-transform: uppercase;
  text-decoration: underline;
  margin: 0;
  padding: 0 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
