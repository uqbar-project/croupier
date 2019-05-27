import cors from 'cors'
import express from 'express'
import path from 'path'
import mongo from './mongo'
import routes from './routes'

const { log } = console

const PORT = process.env.PORT || '8080'
const NODE_ENV = process.env.NODE_ENV || 'development'
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING ||
  'mongodb+srv://croupier-service-development:3OBbqalcc0Aro6vA@cluster0-zxllh.mongodb.net/test?retryWrites=true'

const app = express()

app.use(cors())
app.use(mongo(MONGO_CONNECTION_STRING, `croupier-${NODE_ENV}`))

app.use('/api', routes)

if (NODE_ENV === 'production')
  app.use(express.static(path.join(__dirname, '..', '..', '..', '..', 'build')))

app.listen(PORT, () => log(`Server started in ${NODE_ENV} mode at http://localhost:${PORT}`))