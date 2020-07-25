<template>
<article class="note">
  <h3 class="note__title">#{{note.id+1}} {{note.title}}</h3>
  <ul class="note__menu">
    <li class="note__item" @click="edit(note.id)">Редактировать</li>
    <li class="note__item">Удалить</li>
    <li class="note__item">Отменить</li>
  </ul>
  <!--<div class="note__filter">
    <span class="note__filter-all"
      :style="(filterMask==='all')?('color:#982112'):('')"
      @click="filterChange('all')">
      Все
    </span>
    <span class="note__filter-done"
      :style="(filterMask==='complete')?('color:#982112'):('')"
      @click="filterChange('complete')">
      Выполнено
    </span>
    <span class="note__filter-queque"
      :style="(filterMask==='incomplete')?('color:#982112'):('')"
      @click="filterChange('incomplete')">
      На очереди
    </span>
  </div>-->
  <div v-if="note.todos.length">
    <TodoItem v-for="(t,k) in note.todos"
      :todo="t"
      :key="k"
      @delete="deleteClick"/>
  </div>
  <div v-else>
    <p>Нет задач в списке</p>
  </div>
</article>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import TodoItem from './TodoItem.vue'
export default {
  name: 'Note',
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      filter: 'all',
      modalShow: false,
      indDelete: -1
    }
  },
  methods: {
    deleteClick(id) {
      this.modalShow =true;
      this.indDelete = id;
    },
    send(type) {
      if(type == 'yes') {
        this.$store.dispatch("deleteTodo",this.indDelete);
      }
      this.indDelete = -1;
      this.modalShow=false;
    },
    edit(id) {
      this.$store.dispatch("noteSelect", id);
      this.$router.push({ path: "/edit/" })
    }
  },
  components: {
    TodoItem
  }/*,
  computed: {
    ...mapGetters([
        'filteredTodos',
        'filterMask'
    ])
  }*/
}
</script>
<style>
.note {
  border-top: 1px solid #c3c3c3;
  width: 40%;
  margin: 10px 15px;
}
.note__menu {
  padding: 0;
  margin: 0 15px;
  text-align: left;
  background-color: #efa0ef;
}
.note__item {
  list-style: none;
  margin: 0 5px;
  display: inline-block;
}
@media screen and (max-width: 1100px) {
  .note {
    width: 90%;
  }
}
@media screen and (max-width: 500px) {
  .note {
    width: 100%;
    margin: 0;
  }
}
</style>
