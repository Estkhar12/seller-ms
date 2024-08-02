import express from 'express'
import dotenv from 'dotenv'
import ConnectDB from './core/database'
import AllRouter from './app.routes'
import { connectRabbitMQ } from './services/rabbitmq'
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

ConnectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//router
app.use('/api/v1', AllRouter)

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})

connectRabbitMQ()
