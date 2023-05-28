const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Connect MongoDB on host ${conn.connection.host}`)
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

module.exports=connectDb