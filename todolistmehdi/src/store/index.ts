// src/store/index.ts
import { createStore } from 'vuex';

// Définir l'interface Todo
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Définir l'état initial
interface State {
  todos: Todo[];
  nextTodoId: number;
}

const state: State = {
  todos: [],
  nextTodoId: 1,
};

// Créer le store
const store = createStore<State>({
  state,
  getters: {
    allTodos: (state) => state.todos,
    completedTodos: (state) => state.todos.filter(todo => todo.completed),
    activeTodos: (state) => state.todos.filter(todo => !todo.completed),
  },
  mutations: {
    addTodo: (state, text: string) => {
      state.todos.push({
        id: state.nextTodoId++,
        text,
        completed: false,
      });
    },
    toggleTodo: (state, id: number) => {
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, id: number) => {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
  },
  actions: {
    addTodo: ({ commit }, text: string) => {
      if (text.trim()) {
        commit('addTodo', text);
      }
    },
    toggleTodo: ({ commit }, id: number) => {
      commit('toggleTodo', id);
    },
    removeTodo: ({ commit }, id: number) => {
      commit('removeTodo', id);
    },
  },
});

export default store;

