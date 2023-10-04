<script setup>
import { ref } from "vue";
import { GraphQLService } from "@/services/GraphQLService";
import TodoItem from "@/components/TodoItem.vue";

const isLoading = ref(true);
const todoItems = ref([]);
GraphQLService.query().then((items) => {
    todoItems.value = items.data.listTodoItems.items;
    isLoading.value = false;
});

const $inputAddItem = ref(null);
function addItem() {
    const text = $inputAddItem.value.value;
    if (typeof text == "string" && text.length > 0) {
        $inputAddItem.value.value = "";
        todoItems.value.push({ text, done: false });
    }
    // TODO: publish to Pub/Sub
}
</script>

<template>
  <div v-if="isLoading" class="todoList">
    Loading...
  </div>
  <div v-else>
    <div v-for="item in todoItems">
      <TodoItem :item="item" />
    </div>
    <input type="text" ref="$inputAddItem" @keyup.enter="addItem" class="todoList-add" placeholder="Add new TODO...">
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.todoList-add {
    margin-top: 8px;
    margin-left: 14px;
}
</style>
