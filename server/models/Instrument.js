const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
  Instrument: sequelize.define("instrument", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    instrument: DataTypes.STRING,
  }),
};
