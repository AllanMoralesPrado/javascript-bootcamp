// ./app/middleware/index.js

const verifyToken = require('./auth');
const verifySignUp = require('./verifySignUp');

module.exports = {
  verifyToken,
  verifySignUp,
};

