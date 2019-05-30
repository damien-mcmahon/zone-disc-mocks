const { createUsers } = require('./user');
const { tenants } = require('./tenant');
const { createParties } = require('./party');
const currencies = require('./json/currencies');
const countries = require('./json/countries');
const states = require('./json/states');
const productTemplates = require('./json/dci-product-templates');
const checklist = require('./json/dn-checklist');

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
    "checklist": standardResp('checklist', checklist),
    "countries": standardResp('countries', countries),
    "currencies": standardResp('currencies', currencies),
    "parties": standardResp('parties', createParties(10, tenants[1])),
    "productTemplates": standardResp('productTemplates', productTemplates),
    "queue": standardResp('queue', createParties(6, tenants[0])),
    "states": standardResp('states', states),
    "networks": standardResp('networks', tenants),
    "users": standardResp('users',createUsers(10)),
  };

  return data;
};
