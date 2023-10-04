/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodoItem = /* GraphQL */ `
  mutation CreateTodoItem(
    $input: CreateTodoItemInput!
    $condition: ModelTodoItemConditionInput
  ) {
    createTodoItem(input: $input, condition: $condition) {
      id
      createdAt
      text
      done
      updatedAt
      __typename
    }
  }
`;
export const updateTodoItem = /* GraphQL */ `
  mutation UpdateTodoItem(
    $input: UpdateTodoItemInput!
    $condition: ModelTodoItemConditionInput
  ) {
    updateTodoItem(input: $input, condition: $condition) {
      id
      createdAt
      text
      done
      updatedAt
      __typename
    }
  }
`;
export const deleteTodoItem = /* GraphQL */ `
  mutation DeleteTodoItem(
    $input: DeleteTodoItemInput!
    $condition: ModelTodoItemConditionInput
  ) {
    deleteTodoItem(input: $input, condition: $condition) {
      id
      createdAt
      text
      done
      updatedAt
      __typename
    }
  }
`;
