
// const express = require('express')
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from 'express'
const app = express()
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
// import cors from 'cors'
import { transactionRoute } from './routes/transactions.js'

dotenv.config()
//third party middleware

var cors = require('cors')

app.use(cors()) 

// inbuild middleware
app.use(express.json())

// const MONGO_URL = "mongodb://localhost:5000";

 const MONGO_URL = process.env.MONGO_URL

async function createConnection() {
  const client = new MongoClient(MONGO_URL)
  await client.connect()
  console.log('Mongo is connected ✌️😊')
  return client
}
export const client = await createConnection()

const port = process.env.PORT

app.get('/', function (req, res) {
  res.send('Hello World')
})

// app.use('/auth', authRoute)
app.use('/transactions', transactionRoute)

app.listen(port, () => {
  console.log(`server started at 5000`)
})
