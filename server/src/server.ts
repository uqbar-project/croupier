import cors from 'cors'
import express from 'express'
import path from 'path'
import routes from './routes'

const PORT = process.env.PORT || '8080'
const NODE_ENV = process.env.NODE_ENV || 'development'

const { log } = console
const app = express()

app.use(cors())

app.use('/api', routes)

if (NODE_ENV === 'production')
  app.use(express.static(path.join(__dirname, '..', '..', '..', '..', 'build')))

app.listen(PORT, () => log(`Server started in ${NODE_ENV} mode at http://localhost:${PORT}`))