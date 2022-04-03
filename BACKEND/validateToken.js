const jwt = require("jsonwebtoken")

// Method to validate the token
const validateToken = token => {
    // Validate that the signature of the token hasn't been tampered with
    return jwt.verify(token, 'jwt_secret_password')
}

module.exports = { validateToken }