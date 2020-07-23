<template>
  <div class="todo">
    <p class="todo__info">
      <span class="todo__id">#{{todo.id + 1}}</span>
      <span :class="['todo__status', (todo.done)?('todo__done'):('')]">{{(todo.done)?('выполенено'):('в очереди')}}</span>
    </p>
    <p class="todo__body">{{todo.body}}</p>
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
  font-size: 18px;
  padding-right: 10px;
}
.todo__body {
  background-color: #f0f0f0;
  padding: 15px 5px;
  margin: 0;
  text-align: justify;
}
.todo__info {
  padding: 0;
  height: 24px;
  margin: 0;
  background-color: #d6f6f9
}
.todo__done {
  color: #78de67;
}

</style>
