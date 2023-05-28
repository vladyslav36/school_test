const mongoose = require('mongoose')

const shopSchema = mongoose.Schema({
  name:String
})
const Shop=mongoose.model('Shop',shopSchema)
module.exports=Shop