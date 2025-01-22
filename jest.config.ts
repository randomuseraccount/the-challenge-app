import type {Config} from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  "moduleNameMapper": {
    "^.+\\.(css|less|scss)$": "babel-jest"
  }
}

export default config