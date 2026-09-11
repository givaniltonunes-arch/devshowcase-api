const express = require("express");
const {
  criar,
  buscarPorId,
} = require("../controllers/profileController");

const router = express.Router();

router.post("/", criar);
router.get("/:id", buscarPorId);

module.exports = router;