const { check } = require("express-validator");

exports.postCreatValidation = [
  check("title").notEmpty().withMessage("Title is required"),
  check("content").notEmpty().withMessage("Title is required"),
];
