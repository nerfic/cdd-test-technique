const db = require("../services/mongoose")
const ChickenModel = require("../models/chicken")

ChickenModel.deleteMany({}).then(() => {
    ChickenModel.create(
        {
            "name": "Usain Bolt",
            "birthday": "1986-08-21",
            "weight": "94"
        },
        {
            "name": "Elon Musk",
            "birthday": "1971-06-28",
            "weight": "85"
        }
    ).then(() => {
        console.log("Chickens created!")
        process.exit()
    })
})