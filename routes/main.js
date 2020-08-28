const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send('MAIN PAGE');
});


module.exports = router;
