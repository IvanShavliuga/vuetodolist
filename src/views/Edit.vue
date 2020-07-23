<template>
  <div class="edit">
    {{todo}}
    <div class="edit__form" v-if="!modalShow">
      <h1>{{(todo.id<0)?'Добавить':'Редактировать'}} задачу</h1>
      <form class="form">
        <input class="form__id"
          type="number"
          disabled
          :value="todo.id"
          v-if="todo.id>=0"
        />
        <input class="form__title"
          type="text"
          v-model="todo.title">
        <br>
        <textarea class="form__body"
          v-model="todo.body">
        </textarea>
        <button class="form__button"
          @click.prevent="change"> Отправить
        </button>
      </form>
    </div>
    <div class="edit__modal" v-else>
      <Modal @answer="send"/>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Modal from '../components/Modal.vue'
export default {
  data() {
    return {
      modalShow: false
    }
  },
  computed: {
    ...mapGetters([
        'todo'
    ])
  },
  name: "Edit",
  methods: {
    change() {
      this.modalShow = true;
    },
    send(type){
      if(type=='yes') {
        if(this.todo.id>=0)
          this.$store.dispatch("editTodo", this.todo)
        else
          this.$store.dispatch("addTodo",this.todo)
      }
      this.modalShow = false;
      this.$router.push({path:'/'});
    }
  },
  components: {
    Modal
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
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-weight: bold;
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
