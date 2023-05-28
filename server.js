const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const cors=require('cors')
const connectDb = require('./config/db')
const Food = require('./models/foodModel')
const Shop = require('./models/shopModel')


dotenv.config({path:'config/.env'})
connectDb()
const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())
app.use('/images', express.static(path.resolve(__dirname, 'images')))

app.get('/api/foods',async (req, res) => {
  const foods=await Food.find()
  res.status(200).json({foods})
})
app.get('/api/shops',async (req, res) => {
  const shops=await Shop.find()
  res.status(200).json({shops})
})
if (process.env.NODE_MODE === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}
app.listen(port,console.log(`Server running in ${process.env.NODE_MODE} mode on port ${port}`))