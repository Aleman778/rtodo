import { GraphQLService } from "@/services/GraphQLService";
import { listTodoItems } from "@/graphql/queries.js";
import { createTodoItem } from "@/graphql/mutations.js";
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

    async onCreate(callback) {
        await GraphQLService.subscribe(onCreateTodoItem, callback);
    },

    async onUpdate(callback) {
        await GraphQLService.subscribe(onUpdate, callback);
    },

    async onDelete(callback) {
        await GraphQLService.subscribe(onCreateTodoItem, callback);
    }
}
