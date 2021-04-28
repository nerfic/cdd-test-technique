const express = require("express");
const router = express.Router()

const ChickenModel = require("../models/chicken");

router.get("/", async (req, res) => { // Get all chickens GET http://localhost:8000/chicken
    try {
        const chickens = await ChickenModel.find({})
        res.status(200).json(chickens)
    } catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
})

router.post("/", async (req, res) => { // Add chicken POST http://localhost:8000/chicken
    try {
        await ChickenModel.create({
            name: req.body.name,
            birthday: req.body.birthday,
            weight: req.body.weight,
        })
        res.status(200).send("Chicken created!")
    } catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
})

router.post("/run/:id", async (req, res) => { // Chicken run with ID and query params "steps" POST http://localhost:8000/chicken/run/:id?steps=150
    try {
        const chicken = await ChickenModel.findById(req.params.id)
        if (req.query.steps) {
            if (isNaN(req.query.steps)) {
                res.status(404).send("Value of query params steps is not a number!")
                return;
            } else {
                await ChickenModel.updateOne({
                    _id: req.params.id
                }, {
                    steps: req.query.steps
                })
                res.status(200).send(`Chicken is running! ${req.query.steps} steps`)
            }
        } else {
            res.send("Specify the query params steps! Example: http://localhost:8000/chicken/run/<id>?steps=<number>")
        }
    } catch (err) {
        console.log(err)
        res.status(404).send("Chicken not found")
    }
})

router.get("/:id", async (req, res) => { // Get a chicken with ID GET http://localhost:8000/chicken/:id
    try {
        const chicken = await ChickenModel.findById(req.params.id)
        res.status(200).json(chicken)
    } catch (err) {
        console.log(err)
        res.status(404).send("Chicken not found")
    }
})

router.put("/:id", async (req, res) => { // Update a chicken with ID PUT http://localhost:8000/chicken/:id
    try {
        const chicken = await ChickenModel.findById(req.params.id)
        await ChickenModel.updateOne({
            _id: req.params.id
        }, {
            name: req.body.name || chicken.name,
            birthday: req.body.birthday || chicken.birthday,
            weight: req.body.weight || parseInt(chicken.weight)
        })
        res.status(200).send("Chicken update!")
    } catch (err) {
        console.log(err)
        res.status(404).send("Chicken not found")
    }
})

router.delete("/:id", async (req, res) => { // Delete a chicken with ID DELETE http://localhost:8000/chicken/:id
    try {
        const chicken = await ChickenModel.findById(req.params.id)
        if (chicken) {
            await ChickenModel.deleteOne({
                _id: req.params.id
            })
            res.status(200).send("Chicken deleted!")
        } else {
            res.status(404).send("Chicken not found")
        }
    } catch (err) {
        console.log(err)
        res.status(404).send("Chicken not found")
    }
})

module.exports = router;