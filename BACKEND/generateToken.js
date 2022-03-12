const jwt = require("jsonwebtoken")

const generateToken = id => {
    return jwt.sign({ id }, 'admin', {
        expiresIn: "1d",
    })
}

module.exports = { generateToken }