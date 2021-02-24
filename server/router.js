const express = require('express');

const router = express.Router();
const controller = require('./controller.js');

router
  .route('/reviews')
  .get(controller.get)
  .post(controller.post);

router
  .route('/reviews/recent')
  .get(controller.getRecent);

router
  .route('/reviews/recent10')
  .get(controller.getRecent10);

router
  .route('/reviews/helpful10')
  .get(controller.getHelpful10);

router
  .route('/reviews/highest10')
  .get(controller.getHighest10);

router
  .route('/reviews/lowest10')
  .get(controller.getLowest10);

router
  .route('/reviews/user/:id')
  .get(controller.getUser);

router
  .route('/reviews/:id')
  .put(controller.put)
  .delete(controller.delete);

router
  .route('/shoes')
  .get(controller.getShoes);

module.exports = router;
