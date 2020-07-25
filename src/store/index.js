import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [{
      id: 0,
      title: "Lorem Ipsum is simply dummy text",
      todos: [{
          id: 0,
          title: "Lorem Ipsum is simply dummy text",
          done: true
        }, {
          id: 1,
          title: "Lorem Ipsum is simply dummy text",
          done: false
        }, {
          id: 2,
          title: "Lorem Ipsum is simply dummy text",
          done: true
        }, {
          id: 3,
          title: "Lorem Ipsum is simply dummy text",
          done: false
        }, {
          id: 4,
          title: "Lorem Ipsum is simply dummy text",
          done: false
        }
      ]
    },{
      id: 1,
      title: "Lorem Ipsum is simply dummy text",
      todos: [{
          id: 0,
          title: "Lorem Ipsum is simply dummy text",
          done: false
        }, {
          id: 1,
          title: "Lorem Ipsum is simply dummy text",
          done: false
        }, {
          id: 2,
          title: "Lorem Ipsum is simply dummy text",
          done: false
        }, {
          id: 3,
          title: "Lorem Ipsum is simply dummy text",
          done: true
        }, {
          id: 4,
          title: "Lorem Ipsum is simply dummy text",
          done: true
        }
      ]
    },{
      id: 2,
      title: "Lorem Ipsum is simply dummy text",
      todos: [{
          id: 0,
          title: "Lorem Ipsum is simply dummy text",
          done: true
        }, {
          id: 1,
          title: "Lorem Ipsum is simply dummy text",
          done: false
        }, {
          id: 2,
          title: "Lorem Ipsum is simply dummy text",
          done: true
        }, {
          id: 3,
          title: "Lorem Ipsum is simply dummy text",
          done: false
        }, {
          id: 4,
          title: "Lorem Ipsum is simply dummy text",
          done: true
        }
      ]
    }],
    filter: 'all', //Фильтер задач
    node: {}, //Переменная для редактирования
    undotodo: [], //Переменная для отмены
    indexedit: -1, //Индекс выбранной задачи
    indexnote: -1 //Индекс выбранной заметки
  },
  mutations: {
    DELETE_TODO(state, inddel) {
      const index = state.notes[state.indexnote].todos.findIndex(i => i.id === inddel);
      if( index !== -1  ) {
        state.notes[state.indexnote].todos.splice(index, 1)
      }
    },
    ADD_TODO(state) {
      state.notes[state.indexnote].todos.push({
          id: state.todos.length,
          body: state.todo.body,
          done: false
      });
    },
    EDIT_TODO(state, todo) {
      const index = state.notes[state.indexnote].todos.findIndex(i => i.id === state.todo.id);
      if( index !== -1 ) {
          state.notes[state.indexnote].todos.splice(index, 1, todo)
      }
    },
    FILTER_CHANGE(state, filtercode) {
      state.filter = filtercode;
    },
    EDIT_TODO(state, todo) {
      const index = state.notes[state.indexnote].todos.findIndex(i => i.id === state.todo.id);
      if( index !== -1 ) {
          state.notes[state.indexnote].todos.splice(index, 1, todo)
          state.undotodo = todo;
      }
    },
    TODO_SELECT(state, select) {
      state.indexedit = select;
      console.log(select);
      if(select < 0) {
        state.todo = {
          id: -1,
          title: "Заголовок",
          done: false
        }
      }else {
        state.todo = {
          id: state.notes[state.indexnote].todos[select].id,
          title: state.notes[state.indexnote].todos[select].title,
          done: state.notes[state.indexnote].todos[select].done
        }
      }
    },
    NOTE_SELECT(state, select) {
      state.indexnote=select;
    }
  },
  actions: {
    deleteTodo({commit}, index) {
      try {
          commit('DELETE_TODO', index);
      } catch(e) {
          console.log(e);
      }
    },
    addTodo({commit}, todo) {
      try {
          commit('ADD_TODO', todo);
      } catch(e) {
          console.log(e);
      }
    },
    editTodo({commit}, todo) {
      try {
        console.log(todo);
        commit('EDIT_TODO', todo);
      } catch(e) {
        console.log(e);
      }
    },
    filterChange({commit}, filtercode) {
      try {
        commit('FILTER_CHANGE', filtercode);
      } catch(e) {
        console.log(e);
      }
    },
    todoSelect({commit}, select) {
      try {
        commit('TODO_SELECT', select);
      } catch(e) {
        console.log(e);
      }
    },
    noteSelect({commit}, select) {
      try {
        commit('NOTE_SELECT', select);
      } catch(e) {
        console.log(e);
      }
    }
  },
  getters: {
    filteredTodos(state) {
       switch(state.filter) {
           case 'complete':
               return state.notes[state.indexnote].todos.filter(todo => todo.done);
           case 'incomplete':
               return state.notes[state.indexnote].todos.filter(todo => !todo.done);
           default:
               return state.notes[state.indexnote].todos;
       }
    },
    filterMask(state) {
      return state.filter;
    },
    todo(state) {
      return state.todo;
    },
    note(state) {
      console.log(state.indexnote);
      if(state.indexnote>=0) {
        const nt = {
          id: state.indexnote,
          title: state.notes[state.indexnote].title,
          todos: state.notes[state.indexnote].todos
        }
        state.note=nt;
      }else {
        const nt = {
          id: state.notes.length,
          title: `Заголовок заметки ${state.notes.length}`,
          todos: [{
            id: 0,
            title: "Заметка добвлена",
            done: false
          }]
        }
        state.note=nt;
      }
      return state.note
    },
    allTodos(state) {
      return state.notes[state.indexnote].todos;
    },
    filterNote(state) {
      return state.notes[state.indexnote];
    },
    allNotes(state) {
      return state.notes;
    }
  }
})
