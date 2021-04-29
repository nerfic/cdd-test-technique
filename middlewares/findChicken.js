const ChickenModel = require("../models/chicken")

async function findChicken(req, res, next) {
    try {
        const chicken = await ChickenModel.findById(req.params.id);
        req.chicken = chicken
        next()
    } catch (err) {
        console.log(err)
        res.status(404).send("Chicken not found!")
    }
}

module.exports = findChicken;