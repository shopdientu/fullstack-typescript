require('dotenv').config()
import "reflect-metadata"
import express from 'express'
import { createConnection } from 'typeorm'
import { User } from "./src/entities/User"
import { Post } from "./src/entities/Post"
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import { HelloResolver } from "./src/resolvers/hello"
import { ApolloServerPluginLandingPageGraphQLPlayground, Context } from "apollo-server-core"
import { UserResolver } from "./src/resolvers/user"

const main = async () => {
    
    const app = express()
    const port = process.env.PORT || 5000
    await createConnection({
        type: 'postgres',
        database: 'shopdientu',
        username: process.env.POSTGRE_NAME,
        password: process.env.POSTGRE_PASS,
        logging: true,
        synchronize: true,
        entities:[User, Post]
    })
    //Server Graphql 
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, UserResolver],
            validate: false
        }),
        context: ({ req, res }): Context => ({ req, res }),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
    })    
    
    //start server Graphql
    await apolloServer.start()
    apolloServer.applyMiddleware({ app, cors: false })

    //Start server
    app.listen(port, async () => {
        console.log(`Server started on port  ${port} Graphql start on localhost:${port}${apolloServer.graphqlPath}`)
    })
}

main().catch(err=> console.log(err))