const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("test main page");
});

router.post("/", (req, res) => {

  res.status(200).json({
    test: "test",
  });
});

module.exports = router;
