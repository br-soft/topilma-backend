const multer = require("multer");

//init upload
const upload = multer({
  //   storage,
  preservePath: true,
  dest: "public/uploads/",
}).array("images");


module.exports = upload;