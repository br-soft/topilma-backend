const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.sendFile('../public/index.html');
});


module.exports = router;
