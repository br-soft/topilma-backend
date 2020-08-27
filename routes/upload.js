const { Router } = require("express");
const router = Router();
const multer = require("multer");
const path = require("path");


//init upload
const upload = multer({
  //   storage,
  preservePath: true,
  dest: "public/uploads/",
}).array("images");

router.post("/", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "error",
      });
    } else {
      console.log(
        req.files.forEach((element) => {
          console.log(element.path);
        })
      );
      res.status(200).json({
        message: "file uploaded",
      });
    }
  });
});

module.exports = router;
