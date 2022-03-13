const jwt = require("jsonwebtoken")

// Generate new token method
const generateToken = id => {
    return jwt.sign({ id }, 'admin', {
        expiresIn: "1d",
    })
}

module.exports = { generateToken }