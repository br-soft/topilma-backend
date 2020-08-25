const { Router } = require("express");
const router = Router();
const { userFound } = require("../models/topilma");

router.post("/", async (req, res) => {
  try{
    const poster = await userFound.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      description: req.body.description,
      tel_number: req.body.tel_number,
      category_id: req.body.category_id,
    });
    res.status(201).json({poster});
  }catch(e){
    console.log(e);
    res.status(500).json({
      message: "Server error",
    });
  }
  
});

module.exports = router;