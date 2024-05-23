const mongoose = require('mongoose')
const databaseUrl = "mongodb+srv://croixloic238:jTe9Fqaz02gtvxx7@cluster0.zicgysh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const databaseUrl =
//   process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'
module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true } )
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
