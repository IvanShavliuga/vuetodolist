<template>
  <div class="todo">
    <p class="todo__info">
      <span class="todo__id">#{{todo.id + 1}}</span>
      <span class="todo__title">{{todo.title}}</span>
    </p>
    <p class="todo__body">{{todo.body}}</p>
    <p class="todo__status">
      <span :class="(todo.done)?('todo__done'):('')">{{(todo.done)?('выполенено'):('в очереди')}}</span>
      <button class="todo__button todo__edit">edit</button>
      <button class="todo__button todo__delete">delete</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
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
  padding: 0;
  height: 24px;
  margin: 0;
  font-size: 18px;
  background-color: #d6f6f9;
  text-align: left;
}
.todo__done {
  color: #78de67;
  text-transform: uppercase;
}
.todo__title {
  color: #672356;
}
.todo__button {
  color: #256958;
  text-transform: uppercase;
  text-decoration: underline;
  margin: 0;
  padding: 0 10px;
  background-color: transparent;
  border: none;
  float: right;
}
</style>
