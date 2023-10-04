/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodoItem = /* GraphQL */ `
  query GetTodoItem($id: ID!) {
    getTodoItem(id: $id) {
      id
      createdAt
      text
      done
      updatedAt
      __typename
    }
  }
`;
export const listTodoItems = /* GraphQL */ `
  query ListTodoItems(
    $filter: ModelTodoItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodoItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        text
        done
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
