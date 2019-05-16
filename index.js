const { createUsers } = require('./user');
const { getTenants } = require('./tenant');
const { createParties } = require('./party');
const currencies = require('./json/currencies');
const countries = require('./json/countries');

module.exports = () => {
  const tenants = getTenants();
  const data = {
    users: createUsers(10),
    tenants,
    parties: createParties(10, tenants),
    currencies,
    countries,
    queue: createParties(5, tenants),
  };

  return data;
};
