const express = require("express");
const { check } = require("express-validator");

const HttpError = require("../models/http-error");

const router = express.Router();
const { getUsers, signup, login } = require("../controllers/users-controllers");

router.get("/", getUsers);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  signup
);

router.post("/login", login);

module.exports = router;
