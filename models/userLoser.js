const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const userLoser = sequelize.define("UserLoser", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    tye: Sequelize.STRING,
    allowNull: false,
  },
  tel_number:{
    type: Sequelize.STRING,
    allowNull: false
  }
});
