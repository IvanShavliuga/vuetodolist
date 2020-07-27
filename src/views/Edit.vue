<template>
  <div class="edit">
    <div class="edit__form" v-if="!modalShow">
      <h1>{{(modeedit)?'Добавить':'Редактировать'}} задачу</h1>
      <div class = "form__panel">
        <button class="form__button button__close"
          title="Вернуть на главную"
          @click="rethome">
          Главная
        </button>
        <input class="form__addtext"
          type="text"
          v-model="addtasktext"/>
        <input type="checkbox"
          v-model="addtaskdone"/> Выполнено
        <button class="form__button button__add"
          title="Добавить задачу"
          @click="addTodoSend">
          Добавить
        </button>
        <button class="form__button button__save"
          title="Сохранить изменения"
          @click="saveNote">
          Сохранить
        </button>
      </div>
      <form class="form">
        <input class="form__id"
          type="text"
          disabled
          :value="'#'+(note.id+1)"
          v-if="note.id>=0"
        />
        <input class="form__title"
          type="text"
          v-model="note.title">
      </form>
      <div class="edit__list" v-if="note.todos.length">
        <TodoItem v-for="(t,k) in note.todos"
          :todo="t"
          :key="k"
          mode="write"
          @delete="deleteTodoClick"/>
      </div>
      <div v-else>
        <p>Нет задач в списке</p>
      </div>
    </div>
    <div class="edit__modal" v-else>
      <Modal @answer="send"/>
    </div>
  </div>
</template>
<script>
import Modal from '../components/Modal.vue'
import TodoItem from '../components/TodoItem.vue'
export default {
  data() {
    return {
      modalShow: false,
      note: {id: 0, title: "test",todos:[]},
      modeedit: true,
      addtaskform: false,
      addtasktext: "Текст задачи",
      addtaskdone: false
    }
  },
  created() {
    this.note = {id: this.$store.getters.note.id,
      title: this.$store.getters.note.title,
      todos: this.$store.getters.note.todos};
    this.moveedit = this.$store.getters.moveedit;
  },/*
  updated() {
    this.note = {id: this.$store.getters.note.id,
      title: this.$store.getters.note.title,
      todos: this.$store.getters.note.todos};
    this.undonote = this.$store.getters.undonote;
    this.moveedit = this.$store.getters.moveedit;
  },*/
  name: "Edit",
  methods: {
    change() {
      this.modalShow = true;
    },
    deleteTodoClick(id) {
      this.$store.dispatch("deleteTodo",id);
    },
    addTodoSend() {
      const task =   {
        title: this.addtasktext,
        done: this.addtaskdone
      }
      this.$store.dispatch("addTodo",task);
    },
    saveNote() {
      this.$store.dispatch("saveNote",this.note);
      this.$router.push({ path: "/" })
    },
    rethome(){
      this.modalShow=true;
    },
    send(type) {
      if(type == 'yes') {
        this.$router.push({ path: "/" })
      }
      this.modalShow=false;
      this.$router.push({ path: "/" })
    }
    /*,
    send(type){
      if(type=='yes') {
        if(this.todo.id>=0)
          this.$store.dispatch("editTodo", this.todo)
        else
          this.$store.dispatch("addTodo",this.todo)
      }
      this.modalShow = false;
      this.$router.push({path:'/'});
    }*/
  },
  components: {
    Modal,
    TodoItem
  }
}
</script>
<style>
.edit__form {
  padding: 10px;
  margin: 10px;
}
.form {
  margin-top: 50px;
}
.form__link {
  color: #fff;
  font-size: 22px;
  text-decoration: none;
}
.form__id {
  width: 3%;
  height: 30px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  text-decoration: underline;
  font-weight: bold;
  margin-bottom: 0;
  margin-right: 10px;
  display: inline-block;
}
.form__addtext {
  width: 250px;
  margin-bottom: 15px;
  margin-left: 15px;
  height: 30px;
  font-size: 20px;
  padding: 5px;
  display: inline-block;
}
.form__title {
  width: 92%;
  margin-bottom: 15px;
  margin-left: 15px;
  height: 30px;
  font-size: 20px;
  padding: 5px;
  display: inline-block;
  color: #765681;
}
.form__body {
  width: 100%;
  height: 100px;
}
.form__panel {
  margin: 20px 0;
  padding: 15px 5px;
  height: 40px;
  text-align: left;
}
.form__label, .form__check {
  font-size: 22px;
  font-weight: bold;
  float: left;
}
.form__button {
  padding: 10px;
  margin: 0 5px;
  font-size: 24px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background-color: #45ac45;
  border: 1px solid #238923;
}
</style>
