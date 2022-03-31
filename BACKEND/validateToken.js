const jwt = require("jsonwebtoken")

// decode and validate token
const validateToken = token => {
    return jwt.decode(token)
}

module.exports = { validateToken }