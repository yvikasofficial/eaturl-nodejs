const shortUrl = require("../models/shortUrlModel");
const asyncHandler = require("express-async-handler");

exports.shrinkUrl = asyncHandler(async (req, res) => {
  const result = await shortUrl.create({
    fullUrl: req.body.fullUrl,
    browserUid: req.body.browserUid,
  });
  res.send(result);
});

exports.getUrl = asyncHandler(async (req, res) => {
  const url = await shortUrl.findOne({ shortUrl: req.params.shortUrl });
  if (!url) {
    res.status(404);
    throw new Error("Url no found!");
  }
  url.clicks++;
  url.save();
  res.send(url);
});

exports.getAllUrlsByBrowserId = asyncHandler(async (req, res) => {
  const urls = await shortUrl.find({ browserUid: req.headers.browseruid });
  res.send(urls);
});
