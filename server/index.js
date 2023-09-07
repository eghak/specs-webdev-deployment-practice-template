require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { SERVER_PORT } = process.env;
const { sequelize } = require("./util/database");
const { seedDatabase } = require("./util/seed");

const { Instrument } = require("./models/Instrument");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/get", (req, res) => {
  Instrument.findAll().then((instruments) => {
    console.log(instruments);
    res.status(200).send(instruments);
  });
});

sequelize
  .sync()
  // sequelize.sync({ force: true }).then(() => seedDatabase())
  .then(() => {
    app.listen(SERVER_PORT, () => console.log(`Jammin on ${SERVER_PORT}`));
  })
  .catch((err) => console.log(err));
