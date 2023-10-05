import { GraphQLService } from "@/services/GraphQLService";
import { listTodoItems } from "@/graphql/queries.js";
import { createTodoItem, updateTodoItem, deleteTodoItem } from "@/graphql/mutations.js";
import { onCreateTodoItem, onUpdateTodoItem, onDeleteTodoItem } from "@/graphql/subscriptions.js";

export const TodoItemService = {

    async list() {
        const response = await GraphQLService.query(listTodoItems, {});
        console.log(response);
        return response.data.listTodoItems.items;
    },

    async create(todoItem) {
        await GraphQLService.query(createTodoItem, { input: todoItem });
    },

    async update(todoItem) {
        await GraphQLService.query(updateTodoItem, {
            input: {
                id: todoItem.id, name: todoItem.name, done: todoItem.done
            }
        });
    },

    async delete(todoItem) {
        await GraphQLService.query(deleteTodoItem, {
            input: {
                id: todoItem.id, name: todoItem.name, done: todoItem.done
            }
        });
    },

    async onCreate(callback) {
        await GraphQLService.subscribe(onCreateTodoItem, data => callback(data.value.data.onCreateTodoItem));
    },

    async onUpdate(callback) {
        await GraphQLService.subscribe(onUpdateTodoItem, data => callback(data.value.data.onUpdateTodoItem));
    },

    async onDelete(callback) {
        await GraphQLService.subscribe(onDeleteTodoItem, data => callback(data.value.data.onDeleteTodoItem));
    }
}
