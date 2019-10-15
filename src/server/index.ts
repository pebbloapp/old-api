require('dotenv').config()

import { createServer } from 'http'
import express, { json } from 'express'
import routes from './routes'

const app = express()
const server = createServer(app)

routes(app)

export default server;