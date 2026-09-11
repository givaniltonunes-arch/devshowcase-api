const express = require("express");
const {
  criar,
  listar,
} = require("../controllers/technologyController");

const router = express.Router();

router.post("/", criar);
router.get("/", listar);

module.exports = router;