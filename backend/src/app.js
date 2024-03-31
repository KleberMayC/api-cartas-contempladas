const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const database = require("../config/database");

const cartasRoute = require("./routes/cartasRoute");
const cors = require("cors");

app.use(express.json());
app.database = database;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/cartas", cartasRoute);

module.exports = app;
