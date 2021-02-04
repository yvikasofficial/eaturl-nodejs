const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const shortUrlController = require("../controllers/shortUrlController");

router
  .route("/")
  .get(shortUrlController.getAllUrlsByBrowserId)
  .post(shortUrlController.shrinkUrl);
router
  .route("/p")
  .get(protect, shortUrlController.getAllUrlsByUserId)
  .post(protect, shortUrlController.shrinkUrlWithAuth);
router
  .route("/p/:shortUrl")
  .get(protect, shortUrlController.getUrlWithAuth)
  .delete(protect, shortUrlController.deleteUrl);

router.route("/:shortUrl").get(shortUrlController.getUrl);

module.exports = router;
