import * as Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'
// import { merge } from 'lodash'

import { schemas } from './GraphQL/Schemas'
import { resolvers } from './GraphQL/Resolvers'

const app = new Koa()

const server = new ApolloServer({ typeDefs: schemas, resolvers })

server.applyMiddleware({ app })

app.listen(5300, (): void => {
    console.log(`Server ready at http://localhost:5300${server.graphqlPath}`)
})
