require('dotenv').config({
  path: `./.env`,
});
require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV}`,
});
module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  CRYPTO_SECRET: process.env.CRYPTO_SECRET,
  CRYPTO_IV: process.env.CRYPTO_IV,
  SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS),
};
