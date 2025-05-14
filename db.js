// require('dotenv').config()
// const mongoose = require('mongoose');
// // const DATABASE_URI = process.env.DATABASE_LOCAL;
// const DATABASE_URI = process.env.DATABASE_URI;

// const Database = mongoose.connect(DATABASE_URI).then(()=>{
//     console.log("Database Connected");
// }).catch((err)=>{
//     console.log("Error to connect Database",err);
// })

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// If you want to export the connection
module.exports = mongoose;
