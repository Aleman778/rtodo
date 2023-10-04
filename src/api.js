import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createTodoItem, updateTodoItem, deleteTodoItem } from './graphql/mutations.js';
import awsconfig from './aws-exports.js';
Amplify.configure(awsconfig);

const todo = { text: "Hello world!", done: false };

/* create a todo */
await API.graphql(graphqlOperation(createTodoItem, {input: todo}));
