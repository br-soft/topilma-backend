const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
const router = require("../routes/found");

module.exports = sequelize.define("user_found", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  pincode:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tel_number:{
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type:   Sequelize.ENUM,
    values: ['active', 'resolved', 'deleted', 'outdated']
  }
});