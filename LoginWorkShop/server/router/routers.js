var express = require('express');

var userController = require('../src/userController');

const router = express.Router();

router.route('/invoice/:_id').get(userController.findOneUserController);

module.exports = router;