<template>
  <div class="edit">
    {{filterIndex}}
    <h1>{{(filterIndex.id<0)?'Добавить':'Редактировать'}} задачу</h1>
    <form class="form">
      <input class="form__id"
        type="text"
        disabled
        :value="(filterIndex.id<0)?('add'):(filterIndex.id)"
      />
      <input class="form__title"
        type="text"
        v-model="filterIndex.title">
      <br>
      <textarea class="form__body"
        v-model="filterIndex.body">
      </textarea>
      <button class="form__button"
        @click.prevent="change"> Отправить
      </button>
    </form>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
        'filterIndex'
    ])
  },
  name: "Edit",
  methods: {
    change() {
      this.$store.dispatch("editTodo", this.filterIndex)
    }
  }
}
</script>
<style>
.form {
  width: 80%;
  margin: 0 auto;
}
.form__id {
  width: 5%;
  height: 40px;
  float: left;
}
.form__title {
  float: right;
  width: 90%;
  height: 40px;
}
.form__body {
  width: 100%;
  height: 100px;
}
</style>
