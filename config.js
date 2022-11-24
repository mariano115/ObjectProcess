require('dotenv').config();

const urlMongo = process.env.MONGODB_URL
const secretSession = process.env.SECRETSESSION

module.exports = { urlMongo, secretSession };
