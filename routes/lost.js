const { Router } = require("express");
const router = Router();
const db = require('../models/db');
const upload = require("../utils/multer");


router.get("/", async (req, res) => {
  const result = await db.userLost.findAll({include: db.userLostImage});
  res.status(200).json({result});
})

router.post("/", async (req, res) => {
  console.log(db);
  upload(req, res, async (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "error upload image",
      });
    } else {
     await userLostCreateToDB(req, res);
    }
  });
});

async function userLostCreateToDB(req, res) {
  try {
    //write to DB userLost info
    const poster = await db.userLost.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      description: req.body.description,
      tel_number: req.body.tel_number,
      category_id: req.body.category_id,
      pincode: req.body.pincode,
    });
    //write to DB userLost images
    console.log(`size of files ${req.files.length}`);
    req.files.forEach(async (element) => {
      const img = await db.userLostImage.create({
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
