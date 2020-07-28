import Koa from 'koa'
import Static from 'koa-static'

const Api = new Koa()

Api.use(Static('./dist'))

const PORT = process.env.PORT || 8080

Api.listen(PORT, () => {
    console.log(`MIRRA is listening on port ${PORT}`)
})