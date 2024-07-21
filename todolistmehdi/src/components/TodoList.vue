<!-- src/components/TodoList.vue -->
<template>
  <div>
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in allTodos" :key="todo.id" class="todo-item">
        <input type="checkbox" v-model="todo.completed" @change="toggleTodo(todo.id)">
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button class="remove-button" @click="removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const allTodos = computed(() => store.getters.allTodos);

    const toggleTodo = (id: number) => {
      store.dispatch('toggleTodo', id);
    };

    const removeTodo = (id: number) => {
      store.dispatch('removeTodo', id);
    };

    return {
      allTodos,
      toggleTodo,
      removeTodo,
    };
  },
});
</script>

<style scoped>
/* centrer les  todo */
.todo-item {
  display: flex;
  align-items: center;
  justify-content: center; /* Centre horizontalement les éléments */
  margin-bottom: 10px; /* Espace entre les éléments de la liste */
}
/* Espacer les éléments de la liste */
.todo-item {
  margin-bottom: 10px; /* Ajustez la valeur selon vos besoins */
  display: flex;
  align-items: center;
}

/* Espacer le bouton Remove */
.remove-button {
  margin-left: 10px; /* Ajustez la valeur selon vos besoins */
}

/* Style pour le texte complété */
.completed {
  text-decoration: line-through;
}
</style>

