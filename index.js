const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")

const ChickenController = require("./controllers/chicken")
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/chicken", ChickenController)

app.listen(8000, () => {
    console.log("Server on")
})