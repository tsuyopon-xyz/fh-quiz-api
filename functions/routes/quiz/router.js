const express = require('express');
const controller = require('./controller');

const router = express.Router();

router
  .route('/quiz')
  .get(controller.get);

module.exports = router;