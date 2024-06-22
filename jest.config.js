// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'ts', 'tsx','jsx', 'json', 'node'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    "transformIgnorePatterns": [
      "/node_modules/(?!three).+\\.js$"
    ],
    "moduleNameMapper": {
    "\\.(css|less|scss)$": "<rootDir>/src/pages/level0/empty-modules.js"
    }
  };
  