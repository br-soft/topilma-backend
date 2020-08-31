const UserFound = require("./UserFound");
const UserFoundImage = require("./UserFoundImage");
const UserLost = require("./UserLost");
const UserLostImage = require("./UserLostImage");

UserLost.hasMany(UserLostImage, { foreignKey: "lost_id" });
UserLostImage.belongsTo(UserLost, { foreignKey: "id" });

UserFound.hasMany(UserFoundImage, { foreignKey: "found_id" });
UserFoundImage.belongsTo(UserFound, { foreignKey: "id" });

const db = {
  userFound: UserFound,

  userFoundImage: UserFoundImage,

  userLost: UserLost,

  userLostImage: UserLostImage,
};

module.exports = db;
