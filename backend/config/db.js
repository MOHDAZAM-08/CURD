const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/curd");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        // Exiting process on connection failure
        process.exit(1);
    }
}

module.exports = connectDB;
