import mongoose from 'mongoose'

// Se crea la conexión a la base de datos con mongoose
mongoose.set('strictQuery', true) //Significa que no se pueden crear campos que no estén en el modelo

// Se crea la conexión a la base de datos con mongoose
const connection = async()=>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        console.log(error);
    }
}

export default  connection