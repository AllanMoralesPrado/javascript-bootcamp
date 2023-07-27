// ./app/config/auth.config.js
require('dotenv').config();
const { TOKEN_KEY } = process.env;
module.exports = {
    secret: TOKEN_KEY
};
