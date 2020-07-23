import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
        id: 0,
        title: "Lorem Ipsum is simply dummy text",
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        done: false
      }, {
        id: 1,
        title: "Lorem Ipsum is simply dummy text",
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        done: false
      }, {
        id: 2,
        title: "Lorem Ipsum is simply dummy text",
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        done: false
      }, {
        id: 3,
        title: "Lorem Ipsum is simply dummy text",
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        done: false
      }, {
        id: 4,
        title: "Lorem Ipsum is simply dummy text",
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        done: false
      }
    ],
    isAdd: true,
    filter: 'all',
    todo: {}
  },
  mutations: {
    EDIT_TODO(state, todo) {
      const index = state.todos.findIndex(i => i.id === state.todo.id);
      if( index !== -1 ) {
          state.todos.splice(index, 1, todo)
      }
    },
    RESET_TODO_STATE(state) {
      state.isAdd = true;
      state.todo = {};
    },
    FILTER_CHANGE(state, filtercode) {
      state.filter = filtercode;
    }
  },
  actions: {
    editTodo({commit}, todo) {
      try {
        commit('EDIT_TODO', todo);
      } catch(e) {
        console.log(e);
      } finally {
        commit('RESET_TODO_STATE');
      }
    },
    filterChange({commit}, filtercode) {
      try {
        commit('FILTER_CHANGE', filtercode);
      } catch(e) {
        console.log(e);
      }
    }
  },
  getters: {
    filteredTodos(state) {
       switch(state.filter) {
           case 'complete':
               return state.todos.filter(todo => todo.done);
           case 'incomplete':
               return state.todos.filter(todo => !todo.done);
           default:
               return state.todos;
       }
    },
    filterMask(state) {
      return state.filter;
    }
  }
})
