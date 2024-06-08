
// get-driver-details.js (controllers)
const Uber = require('node-uber');
const axios = require('axios');

// Initialize Uber instance
const uber = new Uber({
    client_id: 'tXT4gzQ3lZJc-bfjIuEwb2vOctrqpFmO',
    client_secret: 'X5vBB2vRtUd75TI6QPPHry5NxJgFwBgTRcc7BN8Z',
    redirect_uri: 'http://localhost:3000/uberWavDriver/callback',
    name: 'Main',
});

// Route handler for initiating OAuth2 flow
exports.initiateOAuth2 = (req, res) => {
    const url = uber.getAuthorizeUrl(['history', 'profile', 'request', 'places']);
    res.redirect(url);
};

// Route handler for handling OAuth2 callback
exports.handleCallback = async (req, res) => {
    const code = req.query.code;

    try {
        const response = await axios.post('https://login.uber.com/oauth/v2/token', {
            client_id: 'tXT4gzQ3lZJc-bfjIuEwb2vOctrqpFmO',
            client_secret: 'X5vBB2vRtUd75TI6QPPHry5NxJgFwBgTRcc7BN8Z',
            redirect_uri: 'http://localhost:3000/uberWavDriver/callback',
            code: code,
            grant_type: 'authorization_code'
        });

        const accessToken = response.data.access_token;

        // Optionally, you can store the access token in the session
        req.session.accessToken = accessToken;

        // Redirect to a success page or perform any further action
        res.redirect('/success');
    } catch (error) {
        // Handle errors appropriately
        console.error('Error handling OAuth2 callback:', error);
        res.status(500).send('Error');
    }
};
