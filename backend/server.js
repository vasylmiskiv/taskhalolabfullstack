import express from'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import goodsRoute from './routes/goodsRoute.js'
import path from 'path'

dotenv.config()

connectDB()

const app = new express()

app.use(express.json())

app.use('/api/goods', goodsRoute)

//static folder
const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, '/frontend/build')))

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'mern', 'build', 'index.html')))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started! :${PORT}`.yellow.italic))