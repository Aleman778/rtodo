
export const GraphQLService = {

    async query() {

        // TODO: this should be fetched from aws-exports.js
        const awsConfig = {
            "aws_project_region": "eu-north-1",
            "aws_appsync_graphqlEndpoint": "https://h2glte7jfnbora55msrqlajk74.appsync-api.eu-north-1.amazonaws.com/graphql",
            "aws_appsync_region": "eu-north-1",
            "aws_appsync_authenticationType": "API_KEY",
            "aws_appsync_apiKey": "da2-xb25tegtr5bqdhi6nuhnks2yyy"
        };


        const listTodoItems = /* GraphQL */ `
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

        const query = listTodoItems;
        const variables = {};
        
        const opts = {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json',
                'aws_appsync_region': awsConfig["aws_appsync_region"],
                'aws_appsync_authenticationType': awsConfig["aws_appsync_authenticationType"],
                'x-api-key': awsConfig["aws_appsync_apiKey"],
            },

            body: JSON.stringify({
                query: query,
                variables,
            }),
        };

        const url = awsConfig["aws_appsync_graphqlEndpoint"];
        console.log(url);

        // const response = await fetch(url, opts);
        // return response.json();
        return { data: { listTodoItems: { items: [ { text: "Hello!", done: true } ] } } };
    }

};
