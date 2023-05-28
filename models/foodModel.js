const mongoose=require('mongoose')

const foodSchema = mongoose.Schema({
  name: String,
  shop: String,
  image: String,
  price:String
})

 const Food=mongoose.model('Food', foodSchema)
module.exports=Food