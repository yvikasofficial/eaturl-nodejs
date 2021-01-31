const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi Every thing is working here :)!");
});

module.exports = router;
