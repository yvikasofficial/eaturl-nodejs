const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

exports.protect = asyncHandler(async (req, res, next) => {
  const authToken = req.headers.authorization;
  let token;
  if (authToken && authToken.startsWith("Bearer")) {
    try {
      token = authToken.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authrized token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("No auth token");
  }
  next();
});
