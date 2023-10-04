import awsConfig from "@/aws-exports.js";
import AWSAppSyncClient from "aws-appsync";
import { API } from "@aws-amplify/api"

API.configure(awsConfig);

export const GraphQLService = {

    async query(query, variables) {
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

        const response = await fetch(url, opts);
        return response.json();
        // return { data: { listTodoItems: { items: [ { text: "Hello!", done: true } ] } } };
    },

    async subscribe(query, callback) {
        API.graphql({
            query,
            variables: {},
            authMode: 'API_KEY',
        }).subscribe({
            next: (data) => {
                callback(data.value.data.onCreateTodoItem);
            }
        });
    }
};
