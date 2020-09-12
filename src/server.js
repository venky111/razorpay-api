const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const app = express();
const Razorpay = require('razorpay');
const router = express.Router();
const shortid = require('shortid');

const razorpay = new Razorpay({
  key_id: 'rzp_test_zgwnISndLAOav0',
  key_secret: '8Do8Vol9gzBN0wuIYqwMkwPJ',
});

router.get('/', (req, res) => {
  console.log("hgeting")
  res.send('Available routes are 1.api/razorpay 2.api/verification 3.api/logo');
});

app.use('.netlify/functions/server',router)

module.exports = app;
module.exports.handler = serverless(app);
