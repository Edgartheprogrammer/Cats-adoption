// jest.config.cjs
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx)$': '@swc/jest'
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|png|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^@stores/(.*)$': '<rootDir>/src/stores/$1',
  },
  globals: {
    'process.env.NODE_ENV': 'test'
  },
  testEnvironmentOptions: {
    customExportConditions: [''],
  }
};