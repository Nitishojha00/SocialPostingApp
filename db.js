// db.js or server.js
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config(); // Only use in local development
}

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
