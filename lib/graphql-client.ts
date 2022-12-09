import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  "https://europe-west1-life-hive.cloudfunctions.net/apiGraph",
  {
    headers: {
      "x-api-key": process.env.GRAFBASE_API_KEY as string,
    },
  }
);
