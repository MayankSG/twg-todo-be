const express = require("express");
const taskController = require("../controllers/taskController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .post(authController.protect, taskController.create)
  .get(authController.protect, taskController.getAll);

router
  .route("/:id")
  .get(authController.protect, taskController.update)
  .delete(authController.protect, taskController.delete)
  .put(authController.protect, taskController.update);
module.exports = router;
