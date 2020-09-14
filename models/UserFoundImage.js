const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

module.exports = sequelize.define("user_found_image", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  found_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})
