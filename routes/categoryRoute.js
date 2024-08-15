const express = require('express');
const { createCategory, fetchCategories } = require('../controllers/categoryController');


const router = express.Router();


router.post("/", createCategory);
router.get("/all", fetchCategories);


module.exports = router;
