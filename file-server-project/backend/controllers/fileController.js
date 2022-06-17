const asyncHandler = require("express-async-handler");
const File = require("../models/fileModel");

// @desc Get files
// @route GET /api/files
// @access Private
const getFiles = asyncHandler(async (req, res) => {
  const files = await File.find();

  res.status(200).json(files);
});

// @desc Create files
// @route POST /api/files
// @access Private
const createFile = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.description) {
    res.status(400);
    throw new Error("Please provide both title and description");
  }

  const file = await File.create({
    title: req.body.title,
    description: req.body.description,
  });

  res.status(201).json(file);
});

// @desc Update file
// @route PUT /api/files
// @access Private
const updateFile = asyncHandler(async (req, res) => {
  const file = await File.findById(req.file.id);

  if (!file) {
    res.status(400);
    throw new Error("File not found");
  }

  const updatedFile = await File.findByIdAndUpdate(req.file.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedFile);
});

// @desc Delete goal
// @route DELETE /api/files
// @access Private
const deleteFile = asyncHandler(async (req, res) => {
  const file = await File.findById(req.file.id);

  if (!file) {
    res.status(400);
    throw new Error("File not found");
  }

  await file.remove();

  res.status(200).json({ id: req.file.id });
});

module.exports = {
  getFiles,
  createFile,
  updateFile,
  deleteFile,
};
