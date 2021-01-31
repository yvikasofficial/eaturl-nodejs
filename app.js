const express = require("express");
const shortUrlRoutes = require("./routes/shortUrlRoutes");

const app = express();
app.use(express.json());

app.use("/api/shortUrl", shortUrlRoutes);

module.exports = app;
