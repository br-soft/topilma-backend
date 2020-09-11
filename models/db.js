const UserFound = require("./UserFound");
const UserFoundImage = require("./UserFoundImage");
const UserLost = require("./UserLost");
const UserLostImage = require("./UserLostImage");

UserLost.hasMany(UserLostImage, { foreignKey: "lost_id" });
UserLostImage.belongsTo(UserLost, { foreignKey: "id" });

UserFound.hasMany(UserFoundImage, { foreignKey: "found_id" });
UserFoundImage.belongsTo(UserFound, { foreignKey: "id" });

 
  exports.userFound = UserFound;

  exports.userFoundImage = UserFoundImage;

  exports.userLost = UserLost;

  exports.userLostImage = UserLostImage;


