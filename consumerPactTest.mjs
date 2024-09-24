import { Pact } from '@pact-foundation/pact';
import { getUser } from './consumer.js';
import * as chai from 'chai';
import { fileURLToPath } from 'url';
import path from 'path';

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const expect = chai.expect;

const provider = new Pact({
  consumer: 'UserServiceConsumer',
  provider: 'UserServiceProvider',
  port: 8081,
  log: path.resolve(__dirname, 'logs', 'pact.log'),
  dir: path.resolve(__dirname, 'pacts'),
  logLevel: 'INFO'
});

describe('Pact with UserService', () => {
  before(async () => {
    await provider.setup();
  });

  after(async () => {
    await provider.finalize();
  });

  describe('when a call to get user by ID', () => {
    before(async () => {
      await provider.addInteraction({
        uponReceiving: 'a request for user with ID 1',
        withRequest: {
          method: 'GET',
          path: '/user/1',
          headers: { 'Accept': 'application/json' }
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
          body: {
            id: '1',
            name: 'John Doe',
            email: 'john.doe@example.com'
          }
        }
      });
    });

    it('should return the correct user', async () => {
      const user = await getUser(1);
      console.log("TEST");
      console.log(user);
      expect(user).to.deep.equal({
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com'
      });
    });

    afterEach(async () => {
      await provider.verify();
    });
  });
});