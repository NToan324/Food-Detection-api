// const express = require('express');
// const router = express.Router();
// const formController = require('../controllers/api.controller');

// router.post('/form-submit', formController.submit);

// module.exports = router;

const express = require("express");
const router = express.Router();
const foodController = require("../controllers/api.controller");

router.post("/add-food", foodController.addFood);
router.delete("/delete-food", foodController.deleteFood);
router.get("/get-food", foodController.getFood);
router.get("/get-food-by-id", foodController.getFoodById);

module.exports = router;
