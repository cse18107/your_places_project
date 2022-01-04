const express = require("express");
const { check } = require("express-validator");

const HttpError = require("../models/http-error");

const router = express.Router();
const {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
  updatePlaceById,
  deletePLace,
} = require("../controllers/places-controllers");

router.get("/:pid", getPlaceById);

router.get("/user/:uid", getPlacesByUserId);

router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  createPlace
);

router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  updatePlaceById
);

router.delete("/:pid", deletePLace);

module.exports = router;
