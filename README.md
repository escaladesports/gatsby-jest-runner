# Gatsby Jest Runner

A working example of Gatsby + Jest

## Install packages

```bash
yarn add jest react-test-renderer identity-obj-proxy enzyme enzyme-adapter-react-16 --dev
```

## Required Files, Folders, and Configurations

- `__mocks__/fileMock.js`
- `__mocks__/gatsby.js`
- `__mocks__/gatsby-link.js`
- `__tests__/.gitkeep`
- `setupTests.js`
- `loadershim.js`

### In your `pacakge.json` file

```json
  "jest": {
    "testRegex": "/.*(__tests__\\/.*)|(.*(test|spec))\\.jsx?$",
    "moduleNameMapper": {
      ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
      ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
    },
    "setupTestFrameworkScriptFile": "<rootDir>/setupTests.js",
    "testPathIgnorePatterns": [
      "node_modules",
      ".cache",
      "__snapshots__",
      "public",
      "dist"
    ],
    "transformIgnorePatterns": [
      "node_modules/(?!(gatsby)/)"
    ],
    "globals": {
      "__PATH_PREFIX__": ""
    },
    "testURL": "http://localhost",
    "setupFiles": [
      "<rootDir>/loadershim.js"
    ]
  },
  "babel": {
    "env": {
      "test": {
        "presets": [
          "es2015",
          "react",
          "stage-0"
        ]
      }
    }
  },
```

## Usage

- `yarn test`