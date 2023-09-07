const { sequelize } = require("./database");
const { Instrument } = require("../models/Instrument");

const instruments = [
  {
    instrument: "violin",
  },
  {
    instrument: " piano",
  },
  {
    instrument: "trumpet",
  },
  {
    instrument: "flute",
  },
  {
    instrument: "saxophone",
  },
];

const seedDatabase = async () => {
  await Instrument.bulkCreate(instruments);
};

module.exports = {
  seedDatabase,
};
