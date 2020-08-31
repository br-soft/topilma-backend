const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

module.exports = sequelize.define("user_lost_image", {
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
  lost_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

