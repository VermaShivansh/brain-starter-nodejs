const config = require('../config.js');
const developmentLogger = require('./development.js')();
const productionLogger = require('./production.js')();

let logger = null;

switch (config.NODE_ENV) {
  case 'development':
    logger = developmentLogger;
    break;
  case 'production':
    logger = productionLogger;
    break;
}

module.exports = logger;
