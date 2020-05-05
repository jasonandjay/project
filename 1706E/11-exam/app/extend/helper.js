const crypto = require('crypto');

const sha256 = (str) => {
    return crypto.createHash('sha256', str)
            .digest('hex')
}

module.exports = {sha256}