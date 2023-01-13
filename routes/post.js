const express = require("express");
const router = express.Router();

// importera validering
const { runValidation } = require("../validators/index");
const { postCreatValidation } = require("../validators/post");

// importera controller
const { create } = require("../controllers/post");

router.post("/post", runValidation, postCreatValidation, create);

module.exports = router;
