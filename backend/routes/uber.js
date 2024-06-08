const express = require('express');
const router = express.Router();
const oAuthController = require('../controllers/get-driver-details.js');

// Route for initiating OAuth2 flow
router.get('/', oAuthController.initiateOAuth2);

// Route for handling OAuth2 callback
router.get('/callback', oAuthController.handleCallback);

module.exports = router;


