const crypto = require('crypto');

export default function generationUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}