const express = require('express');
const shortenUrl = require('./shorten.js');

const apiRouter = () => {
  const router = express.Router();

  router.post('/shorten', shortenUrl);

  return router;
};

module.exports = apiRouter;
