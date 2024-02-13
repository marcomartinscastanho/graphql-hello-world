import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  # default
  schema {
    query: Query
  }

  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello World!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
startStandaloneServer(server, { listen: { port: 9000 } }).then(({ url }) => console.log(`Server running at ${url}`));
