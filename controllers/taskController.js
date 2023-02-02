const Task = require("./../models/taskModel");
const catchAsync = require("./../utils/catchAsync");

exports.create = catchAsync(async (req, res, next) => {
  const data = {
    title: req.body.title,
    description: req.body.description,
    user: req.user._id,
    status: "open",
  };

  const doc = await Task.create(data);
  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  const doc = await Task.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.getAll = catchAsync(async (req, res, next) => {
  const doc = await Task.find({ user: req.user._id });
  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: doc.length,
    data: {
      data: doc,
    },
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const doc = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});
