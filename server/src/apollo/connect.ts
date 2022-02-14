import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { HelloResolver } from "../resolvers/hello";
import { UserResolver } from "../resolvers/user";
import { buildSchema } from "type-graphql";
import { Context } from "../types/Context";
import { PostResolver } from "../resolvers/post";
// import cors from "cors";

export const connectApolloServer = async (app?: any) => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver, PostResolver],
      validate: false,
    }),

    context: ({ req, res }): Context => ({ req, res }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  console.log(`connected Apollo-server ${apolloServer.graphqlPath}`);
};
