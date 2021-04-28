const mongoose = require("mongoose");
const db = require("../services/mongoose")

const chickenSchema = new mongoose.Schema({
    name: String,
    birthday: Date,
    weight: Number,
    steps: { type: Number, default: 0 },
    isRunning: { type: Boolean, default: false }
});

const chickenModel = mongoose.model("chickens", chickenSchema);

module.exports = chickenModel;