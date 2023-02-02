const express = require("express");
const globalErrorHandler = require("./controllers/errorController");
const cors = require("cors");
/**
 * Router files
 */
const userRouter = require("./routes/userRoutes");
const taskRouter = require("./routes/taskRoutes");

// Start express app
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// 3) ROUTES
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.use(globalErrorHandler);

module.exports = app;
