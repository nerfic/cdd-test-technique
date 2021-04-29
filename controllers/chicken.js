const express = require("express");
const router = express.Router()

const ChickenModel = require("../models/chicken");
const findChicken = require("../middlewares/findChicken.js")

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
        res.status(400).send("Il un ou plusieurs champs!")
    }
})

// Chicken run with ID and query params "steps" POST http://localhost:8000/chicken/run/:id?steps=150
// Chicken run 1 step with ID POST http://localhost:8000/chicken/run/:id

router.post("/run/:id", findChicken, async (req, res) => {
    try {
        const chicken = req.chicken
        if (req.query.steps) {
            if (isNaN(req.query.steps)) {
                res.status(400).send("Value of query params steps is not a number!")
                return;
            } else {
                await ChickenModel.updateOne({
                    _id: req.params.id
                }, {
                    steps: chicken.steps + parseInt(req.query.steps),
                    isRunning: true
                })
                res.status(200).send(`Chicken is running! ${req.query.steps} steps`)
            }
        } else {
            await ChickenModel.updateOne({
                _id: req.params.id
            }, {
                steps: chicken.steps + 1,
                isRunning: true
            })
            res.status(200).send("Chicken is running! 1 step")
        }
    } catch (err) {
        console.log(err)
        res.status(404).send("Chicken not found!")
    }
})

router.get("/:id", findChicken, async (req, res) => { // Get a chicken with ID GET http://localhost:8000/chicken/:id
    try {
        const chicken = req.chicken
        if (chicken) {
            res.status(200).json(chicken)
        } else {
            res.status(404).send("Chicken not found!")
        }
    } catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
})

router.put("/:id", findChicken, async (req, res) => { // Update a chicken with ID PUT http://localhost:8000/chicken/:id
    try {
        const chicken = req.chicken
        if (chicken) {
            await ChickenModel.updateOne({
                _id: req.params.id
            }, {
                name: req.body.name || chicken.name,
                birthday: req.body.birthday || chicken.birthday,
                weight: req.body.weight || parseInt(chicken.weight)
            })
            res.status(200).send("Chicken update!")
        } else {
            res.status(404).send("Chicken not found!")
        }
    } catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
})

router.delete("/:id", findChicken, async (req, res) => { // Delete a chicken with ID DELETE http://localhost:8000/chicken/:id
    try {
        const chicken = req.chicken
        if (chicken) {
            await ChickenModel.deleteOne({
                _id: req.params.id
            })
            res.status(200).send("Chicken deleted!")
        } else {
            res.status(404).send("Chicken not found!")
        }
    } catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router;