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
    addnote: true, //Флаг добавления
    node: {}, //Переменная для редактирования
    undonote: [], //Переменная для отмены
    indexedit: -1, //Индекс выбранной задачи
    indexnote: -1 //Индекс выбранной заметки
  },
  mutations: {
    DELETE_TODO(state, inddel) {
      const index = state.note.todos.findIndex(i => i.id === inddel);
      if( index !== -1  ) {
        console.log("note: "+state.note.todos.length)
        /*state.undonote.push ({
          id: state.note.id,
          title: state.note.title,
          todos: state.note.todos
        });*/
        state.note.todos.splice(index, 1)
        console.log("note: "+state.note.todos.length)
      }
    },
    ADD_TODO(state, todo) {
      state.note.todos.push({
          id: state.note.todos.length,
          title: todo.title,
          done: todo.done
      });
    },
    EDIT_TODO(state, todo) {
      const index = state.note.todos.findIndex(i => i.id === state.todo.id);
      if( index !== -1 ) {
          state.note.todos.splice(index, 1, todo)
      }
    },
    FILTER_CHANGE(state, filtercode) {
      state.filter = filtercode;
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
      if(select<0) {
        state.addnote=true
      }else
        state.addnote=false
    },
    SAVE_NOTE(state) {
      const nt = {
        id: state.indexnote,
        title: state.note.title,
        todos: state.note.todos
      }
      if(state.addnote) {
        state.notes.push(nt);
      }else{
        const index = state.notes.findIndex(i => i.id === state.node.id);
        if( index !== -1 ) {
            state.notes.splice(index, 1, nt)
        }
      }
      state.note = {}
    },
    DELETE_NOTE(state, id) {
      const index = state.notes.findIndex(i => i.id === id);
      if( index !== -1 ) {
          state.notes.splice(index, 1)
      }
    }
  },
  actions: {
    deleteNote({commit}, index) {
      try {
          commit('DELETE_NOTE', index);
      } catch(e) {
          console.log(e);
      }
    },
    saveNote({commit}, index) {
      try {
          commit('SAVE_NOTE', index);
      } catch(e) {
          console.log(e);
      }
    },
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
    modeedit(state) {
      return state.addnote;
    },
    note(state) {
      if(state.indexnote>=0) {
        const nt = {
          id: state.indexnote,
          title: state.notes[state.indexnote].title,
          todos: state.notes[state.indexnote].todos
        }
        state.note=nt;
        state.addnote = false;
      }else {
        const nt = {
          id: state.notes.length,
          title: `Заголовок заметки ${state.notes.length+1}`,
          todos: [{
            id: 0,
            title: "Заметка добавлена",
            done: false
          },{
            id: 1,
            title: "Заметка добавлена",
            done: false
          }]
        }
        state.addnote = true;
        state.note=nt;
      }
      return state.note
    },
    undonote(state) {
      return state.undonote;
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
