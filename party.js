const Faker = require('faker');
const { range, randomInt } = require('./utils');

const STATUSES = ['Active', 'Rejected', 'Awaiting Approval'];

module.exports =  {
  createParties: (count, tenants) => range(0,count).map(() => {
      const randTenant = Math.max(0, randomInt(0, tenants.length - 1));
      const tenant = tenants[randTenant];
      const partyName = Faker.company.companyName();
      const statusName = STATUSES[randomInt(0, STATUSES.length - 1)];

      const contactDetails = {
        contactType: 'preffered',
        postalAddress: {
          postalAddressLine1: Faker.address.streetAddress(),
          city: Faker.address.city(),
          state: Faker.address.stateAbbr(),
          postalCode: Faker.address.zipCode(),
          country: Faker.address.countryCode()
        },
          eAddress: [{
            address: Faker.internet.email(),
            addressType: 'email'
        }],
        teleAddress: [{
            telecommunicationNumber: Faker.phone.phoneNumberFormat(),
            telecomType: 'phone',
            extension: ''
        }]
      };

      return {
        id: Faker.random.uuid(),
        networkId: tenant.shortCode,
        partyName,
        statusName,
        contactDetails
      };
  })
};
