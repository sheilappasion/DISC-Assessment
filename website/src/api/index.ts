import Koa from 'koa'
import Static from 'koa-static'
import BodyParser from 'koa-bodyparser'

var historyApiFallback = require('koa-history-api-fallback')

const Api = new Koa()

Api.use(BodyParser())
Api.use(historyApiFallback())
Api.use(Static('./dist'))

const PORT = process.env.PORT || 8080

Api.listen(PORT, () => {
    console.log(`MIRRA is listening on port ${PORT}`)
})