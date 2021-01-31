const express = require("express");
const shortUrlRoutes = require("./routes/shortUrlRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(express.json());

app.use("/api/shortUrl", shortUrlRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
