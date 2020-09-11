const { Router } = require("express");
const router = Router();
const db = require('../models/db');
const upload = require("../utils/multer");

router.get("/", async (req, res) => {
  const result = await db.userFound.findAll({include: db.userFoundImage});
  res.status(200).json({result});
})

router.post("/", async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "error user found image write DB",
      });
    }else{
      await userFoundCreateToDB(req, res);
    }
  });
});

async function userFoundCreateToDB(req, res) {
  try {
    //write to DB userLost info
    console.log(db);
    const poster = await db.userFound.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      description: req.body.description,
      tel_number: req.body.tel_number,
      category_id: req.body.category_id,
      pincode: req.body.pincode,
      states: req.body.states,
    });
    //write to DB userLost images
    req.files.forEach(async (element) => {
      const img = await db.userFoundImage.create({
        url: element.path,
        found_id: poster.id,
      });
    });
    res.status(201).json({ poster });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Server error",
    });
  }
}

module.exports = router;
