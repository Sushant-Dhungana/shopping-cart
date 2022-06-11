const express = require("express");
const cors = require("cors");

const products = require("./products");

const app = express()

app.use(express.json())
app.use(cors()) //allows us to access nodejs api
app.get("/", (req, res) => {
    res.send("welcome to my shop api");
});
app.get("/products", (req, res) => {
    res.send(products);
});


const port = process.env.PORT || 8000

app.listen(port, console.log(`Server running on port ${port}`));