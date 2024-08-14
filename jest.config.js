/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/src/test.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+.tsx?$": [
      "ts-jest",
      {
        diagnostics: false,
      },
    ],
  },
}
