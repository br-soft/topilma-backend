const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

exports.userLost = sequelize.define("user_lost", {
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
  category_id:{
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tel_number:{
    type: Sequelize.STRING,
    allowNull: false
  }
});


exports.userFound = sequelize.define("user_found", {
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
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tel_number:{
    type: Sequelize.STRING,
    allowNull: false
  }
});


exports.userLostImages = sequelize.define("user_lost_image", {
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


exports.userFoundImages = sequelize.define("user_found_image", {
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
