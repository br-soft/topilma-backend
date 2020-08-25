const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("test main page");
});


module.exports = router;
