const { Verifier } = require('@pact-foundation/pact');
const path = require('path');

const opts = {
  providerBaseUrl: 'http://localhost:8081',
  pactUrls: [path.resolve(process.cwd(), 'pacts', 'userserviceconsumer-userserviceprovider.json')]
};

new Verifier(opts).verifyProvider().then(output => {
  console.log('Pact Verification Complete!');
  console.log(output);
}).catch(e => {
  console.log('Pact Verification Failed: ', e);
});