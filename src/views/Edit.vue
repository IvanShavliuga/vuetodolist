<template>
  <div class="edit">
    {{filterIndex}}
    <div class="edit__form" v-if="!modalShow">
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
        'filterIndex'
    ])
  },
  name: "Edit",
  methods: {
    change() {
      this.modalShow = true;
    },
    send(type){
      if(type=='yes') {
        this.$store.dispatch("editTodo", this.filterIndex)
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
