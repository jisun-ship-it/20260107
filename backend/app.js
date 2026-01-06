const express = require("express");
const cors = require("./middleware/cors");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const healthRouter = require("./routes/health");

const app = express();

app.use(express.json());
app.use(cors);
app.use("/api", healthRouter);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
