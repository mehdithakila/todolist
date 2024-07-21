<!-- src/components/TodoForm.vue -->
<template>
  <div>
    <h1>Add Todo</h1>
    <form @submit.prevent="submitForm">
      <input v-model="newTodoText" placeholder="Enter todo text" />
      <button type="submit">Add Todo</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const newTodoText = ref('');

    const submitForm = () => {
      if (newTodoText.value.trim()) {
        store.dispatch('addTodo', newTodoText.value);
        newTodoText.value = '';
      }
    };

    return {
      newTodoText,
      submitForm,
    };
  },
});
</script>

<style scoped>
/* Ajoutez des styles ici si nécessaire */
</style>

