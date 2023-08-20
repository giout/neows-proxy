import express from 'express'
import dotenv from 'dotenv'
import { findFreePort } from './utils/port.js'
import router from './routes/index.js'
import cors from 'cors'

dotenv.config() // loading env variables

const app = express()
const PORT = process.env.PORT

// middlewares
app.use(cors())
app.use(express.json())
app.use('/', router)

findFreePort(process.env.PORT)
.then(port => {
    app.listen(port)
})

