import express from 'express'
import routes from './routes'

const PORT = process.env.PORT || 8080

const { log } = console
const app = express()

app.use(routes)

app.listen(PORT, () => log(`Server started at http://localhost:${PORT}`))