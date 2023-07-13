import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

async function connectDB(){
    const url = 'mongodb://localhost:27017/shopdienthoai'
    
   
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;