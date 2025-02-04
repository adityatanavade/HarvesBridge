import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://0.0.0.0:27017/farmerPortal', {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            })
            console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB;