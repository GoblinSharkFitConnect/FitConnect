const express = require('express');
const router = express.Router();

// route to get user profile information
router.get('/data', (req, res, next) => {
  res.sendStatus(200);
});
