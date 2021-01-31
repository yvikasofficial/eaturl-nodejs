const shortUrl = require("../models/shortUrlModel");
const asyncHandler = require("express-async-handler");

exports.shrink = asyncHandler(async (req, res, nex) => {
  const result = await shortUrl.create({ fullUrl: req.body.fullUrl });
  res.send(result);
});
