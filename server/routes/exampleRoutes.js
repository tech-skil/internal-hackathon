const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

router.post('/', exampleController.createExample);
router.get('/', exampleController.getAllExamples);

module.exports = router;