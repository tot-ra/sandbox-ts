/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/src1"],
  testMatch: ["**/?(*.)+(spec|test).ts"],
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.d.ts"],
};
