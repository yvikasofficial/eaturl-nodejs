const express = require("express");
const router = express.Router();
const shortUrlController = require("../controllers/shortUrlController");

router.post("/", shortUrlController.shrink);

module.exports = router;
