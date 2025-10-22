# Pact.js Contract Testing Demo - 2025 Edition

This project demonstrates **Consumer-Driven Contract Testing** using Pact.js v16, designed for AQA engineers learning the fundamentals.

## 🎯 What This Project Teaches

- **Contract Testing Fundamentals**: How consumer and provider teams can collaborate through contracts
- **Pact.js v16 Features**: Latest 2025 features and best practices
- **Real-world Implementation**: Practical examples your team can adapt

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ (required for Pact.js v16)
- npm or yarn

### Installation
```bash
npm install
```

### Running the Demo

1. **Run Consumer Tests** (generates contracts):
   ```bash
   npm run test:consumer
   ```

2. **Start Provider** (in another terminal):
   ```bash
   npm run start:provider
   ```

3. **Verify Contracts** (validates provider against contracts):
   ```bash
   npm run verify:pacts
   ```

4. **Run Everything**:
   ```bash
   npm run test:all
   ```

## 📁 Project Structure

```
├── consumer.js              # Consumer service (HTTP client)
├── provider.js              # Provider service (Express API)
├── consumerPactTest.mjs     # Pact contract tests
├── verifyPacts.js           # Contract verification
├── pact.config.js           # Modern Pact configuration
├── pacts/                   # Generated contract files
└── logs/                    # Pact execution logs
```

## 🔧 2025 Best Practices Included

### ✅ Modern Pact.js v16
- Latest Pact.js features and performance improvements
- Updated to Pact Specification v2.0.0
- Enhanced error reporting and debugging

### ✅ Environment Configuration
- Configurable URLs and ports
- Environment-specific settings
- CI/CD ready configuration

### ✅ Comprehensive Scripts
- `npm run test:consumer` - Run contract tests
- `npm run start:provider` - Start provider service
- `npm run verify:pacts` - Verify contracts
- `npm run test:all` - Complete test cycle

### ✅ Pact Broker Integration Ready
- Configuration for Pact Broker
- Publishing and verification workflows
- Team collaboration features

## 🎓 Learning Path for AQA Engineers

### 1. **Understanding the Flow**
1. Consumer defines expected API behavior
2. Pact generates contract files
3. Provider validates against contracts
4. Both teams stay in sync

### 2. **Key Concepts**
- **Consumer**: Service that calls an API
- **Provider**: Service that provides the API
- **Contract**: Agreement on API behavior
- **Verification**: Ensuring provider meets contract

### 3. **Real-world Application**
- Use this pattern for microservices
- Integrate with CI/CD pipelines
- Share contracts via Pact Broker
- Catch breaking changes early

## 🔄 CI/CD Integration

### GitHub Actions Example
```yaml
name: Contract Tests
on: [push, pull_request]
jobs:
  consumer-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm install
      - run: npm run test:consumer
      - run: npm run verify:pacts
```

## 📚 Additional Resources

- [Pact.js Documentation](https://docs.pact.io/implementation_guides/javascript)
- [Pact Broker](https://docs.pact.io/pact_broker)
- [Contract Testing Best Practices](https://docs.pact.io/best_practices)

## 🤝 Contributing

This is a learning project! Feel free to:
- Add more test scenarios
- Experiment with different API patterns
- Share improvements with the team

---

**Built for AQA Engineers** | **Updated for 2025** | **Pact.js v16**
