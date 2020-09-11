const UserFound = require("./UserFound");
const UserFoundImage = require("./UserFoundImage");
const UserLost = require("./UserLost");
const UserLostImage = require("./UserLostImage");

UserLost.hasMany(UserLostImage, { foreignKey: "lost_id" });
UserLostImage.belongsTo(UserLost, { targetKey: 'id' });

UserFound.hasMany(UserFoundImage, { foreignKey: "found_id" });
UserFoundImage.belongsTo(UserFound, { targetKey: 'id' });

 
  exports.userFound = UserFound;

  exports.userFoundImage = UserFoundImage;

  exports.userLost = UserLost;

  exports.userLostImage = UserLostImage;


