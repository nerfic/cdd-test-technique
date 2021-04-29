const mongoose = require("mongoose");

const chickenSchema = new mongoose.Schema({
    name: { type: String, required: true },
    birthday: Date,
    weight: { type: Number, required: true },
    steps: { type: Number, default: 0 },
    isRunning: { type: Boolean, default: false }
});

const chickenModel = mongoose.model("chickens", chickenSchema);

module.exports = chickenModel;