const { createUsers } = require('./user');
const { tenants } = require('./tenant');
const { createParties } = require('./party');
const currencies = require('./json/currencies');
const countries = require('./json/countries');
const states = require('./json/states');
const productTemplates = require('./json/product-templates');

const standardResp = (key, data) => ({
  "status": [{
    "majorCode": "0",
    "minorCode": "0",
    "level": "S",
    "message": "Action Successful"
  }],
  [key]: data
});

module.exports = () => {
  const data = {
    "countries": standardResp('countries', countries),
    "currencies": standardResp('currencies', currencies),
    "parties": standardResp('parties', createParties(10, tenants)),
    "productTemplates": standardResp('productTemplates', productTemplates),
    "queue": standardResp('queue', createParties(10, tenants)),
    "states": standardResp('states', states),
    "networks": standardResp('networks', tenants),
    "users": standardResp('users',createUsers(10)),
  };

  return data;
};
