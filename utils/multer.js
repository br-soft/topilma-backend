const multer = require("multer");

//init upload
// const upload = multer({
//   //   storage,
//   preservePath: true,
//   dest: "public/uploads/",
// }).array("images");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
    );
  },
});

var upload = multer({ storage: storage }).array("images");

module.exports = upload;
