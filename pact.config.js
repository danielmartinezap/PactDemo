// Pact.js Configuration for 2025
// This file demonstrates modern Pact.js configuration practices

module.exports = {
  // Consumer configuration
  consumer: {
    name: 'UserServiceConsumer',
    version: '1.0.0'
  },
  
  // Provider configuration
  provider: {
    name: 'UserServiceProvider',
    baseUrl: process.env.PROVIDER_BASE_URL || 'http://localhost:8081'
  },
  
  // Pact configuration
  pact: {
    port: 8081,
    logLevel: 'INFO',
    logDir: './logs',
    pactDir: './pacts',
    spec: 2 // Pact Specification version
  },
  
  // Broker configuration (for 2025 best practices)
  broker: {
    baseUrl: process.env.PACT_BROKER_BASE_URL || 'https://your-broker-url.com',
    token: process.env.PACT_BROKER_TOKEN,
    publishVerificationResults: true,
    consumerVersion: process.env.CONSUMER_VERSION || '1.0.0'
  },
  
  // CI/CD integration
  ci: {
    enabled: process.env.CI === 'true',
    buildUrl: process.env.BUILD_URL,
    branch: process.env.GIT_BRANCH || 'main'
  }
};
