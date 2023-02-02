const express = require("express");
const globalErrorHandler = require("./controllers/errorController");

/**
 * Router files
 */
const userRouter = require("./routes/userRoutes");

// Start express app
const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// 3) ROUTES
app.use("/api/v1/users", userRouter);

app.use(globalErrorHandler);

module.exports = app;
