import * as Koa from 'koa'
// import { ApolloServer } from 'apollo-server-koa'
// import { merge } from 'lodash'

import getPlaylist from './requests/getPlaylist'

const app = new Koa()

app.use(async ctx => {
    const playlist = await getPlaylist('2200968896')
    ctx.body = playlist
})

app.listen(5300, (): void => {
    console.log(`Server ready at http://localhost:5300`)
})
