const shortUrl = require("../models/shortUrlModel");
const asyncHandler = require("express-async-handler");

exports.shrinkUrl = asyncHandler(async (req, res) => {
  const result = await shortUrl.create({
    fullUrl: req.body.fullUrl,
    browserUid: req.body.browserUid,
  });
  res.send(result);
});

exports.shrinkUrlWithAuth = asyncHandler(async (req, res) => {
  const result = await shortUrl.create({
    fullUrl: req.body.fullUrl,
    userUid: req.user._id,
  });
  res.send(result);
});

exports.getUrl = asyncHandler(async (req, res) => {
  const url = await shortUrl.findOne({ shortUrl: req.params.shortUrl });
  if (!url) {
    res.status(404);
    throw new Error("Url no found!");
  }
  res.send({ fullUrl: url.fullUrl });
  url.clicks++;
  url.save();
});

exports.getAllUrlsByBrowserId = asyncHandler(async (req, res) => {
  const urls = await shortUrl.find({ browserUid: req.headers.browseruid });

  res.send(urls.reverse());
});

exports.getAllUrlsByUserId = asyncHandler(async (req, res) => {
  const urls = await shortUrl.find({ userUid: req.user._id });

  res.send(urls.reverse());
});

exports.deleteUrl = asyncHandler(async (req, res) => {
  const url = await shortUrl.findOne({
    shortUrl: req.params.shortUrl,
    userUid: req.user._id,
  });

  if (!url) {
    res.status(404);
    throw new Error("Url Not found!");
  }

  await url.delete();
  res.send({});
});

exports.getUrlWithAuth = asyncHandler(async (req, res) => {
  const url = await shortUrl.findOne({
    shortUrl: req.params.shortUrl,
    userUid: req.user._id,
  });
  if (!url) {
    res.status(404);
    throw new Error("Url no found!");
  }
  res.send(url);
  url.clicks++;
  url.save();
});
