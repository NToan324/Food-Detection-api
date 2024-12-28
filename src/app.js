const express = require("express");
const app = express();
const router = require("./routes/index.route");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors({ credentials: true, origin: true }));

//init router
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).send("Hello from Food API");
});

app.use("/", router);

//init db
const instanceMongodb = require("./dbs/init.mongodb");
module.exports = app;
