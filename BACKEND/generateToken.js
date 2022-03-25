const jwt = require("jsonwebtoken")

// Generate new token method
const generateToken = id => {
    return jwt.sign({ id }, 'jwt_secret_password', {
        expiresIn: "1w",
    })
}

module.exports = { generateToken }