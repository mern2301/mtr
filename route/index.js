const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

const api = process.env.BASE_URL
router.use(api, apiRouter)


module.exports = router;