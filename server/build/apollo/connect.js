"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectApolloServer = void 0;
const apollo_server_core_1 = require("apollo-server-core");
const apollo_server_express_1 = require("apollo-server-express");
const hello_1 = require("../resolvers/hello");
const user_1 = require("../resolvers/user");
const type_graphql_1 = require("type-graphql");
const post_1 = require("../resolvers/post");
// import cors from "cors";
const connectApolloServer = async (app) => {
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [hello_1.HelloResolver, user_1.UserResolver, post_1.PostResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res }),
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    console.log(`connected Apollo-server ${apolloServer.graphqlPath}`);
};
exports.connectApolloServer = connectApolloServer;
//# sourceMappingURL=connect.js.map