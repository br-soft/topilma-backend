const { Router } = require("express");
const router = Router();
const { userLost } = require("../models/topilma");
const { userLostImages } = require("../models/topilma");
const upload = require("../utils/multer");

router.post("/", async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "error upload image",
      });
    } else {
      userLostCreateToDB(req, res);
    }
  });
});

async function userLostCreateToDB(req, res) {
  try {
    //write to DB userLost info
    const poster = await userLost.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      description: req.body.description,
      tel_number: req.body.tel_number,
      category_id: req.body.category_id,
    });
    //write to DB userLost images
    req.files.forEach(async (element) => {
      const img = await userLostImages.create({
        url: element.path,
        lost_id: poster.id,
      });
    });
    res.status(201).json({ poster});
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Server error",
    });
  }
}

module.exports = router;
