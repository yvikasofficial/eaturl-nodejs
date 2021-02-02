const express = require("express");
const router = express.Router();
const shortUrlController = require("../controllers/shortUrlController");

router
  .route("/")
  .get(shortUrlController.getAllUrlsByBrowserId)
  .post(shortUrlController.shrinkUrl);
router.route("/:shortUrl").get(shortUrlController.getUrl);

module.exports = router;
