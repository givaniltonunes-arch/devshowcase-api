const express = require("express");

const {
  criar,
  listar,
} = require("../controllers/projectController");

const router = express.Router();

router.post("/", criar);
router.get("/", listar);

module.exports = router;