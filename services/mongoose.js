const mongoose = require("mongoose");

const mongooseConnection = mongoose.connect(`mongodb://localhost:27017/chicken_run`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("MongoDB connected")
});

module.exports = mongooseConnection;
