<script setup>
import { ref } from "vue";
import { TodoItemService } from "@/services/TodoItemService";
import TodoItem from "@/components/TodoItem.vue";

const isLoading = ref(true);
const todoItems = ref([]);
TodoItemService.list().then((items) => {
    console.log(items);
    todoItems.value = items;
    isLoading.value = false;
});

TodoItemService.onCreate(addedItem => {
    todoItems.value.push(addedItem);
});

const $inputAddItem = ref(null);
function addItem() {
    const text = $inputAddItem.value.value;
    if (typeof text == "string" && text.length > 0) {
        $inputAddItem.value.value = "";
        TodoItemService.create({ text, done: false });
        // todoItems.value.push({ text, done: false });
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
.todoList-add {
    margin-top: 8px;
    margin-left: 20px;
}
</style>
