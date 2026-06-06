const express = require("express");
const app = express();

const healthRouter = require("./routes/health");
app.use(healthRouter);


module.exports = app;