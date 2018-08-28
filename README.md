# Gatsby Jest Runner

A working example of Gatsby + Jest

## Install packages

```bash
yarn add babel-jest react-test-renderer identity-obj-proxy 'babel-core@^7.0.0-0' @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties @babel/plugin-proposal-optional-chaining --dev
```

## Required Files, Folders, and Configurations

- `__mocks__/fileMock.js`
- `__tests__/.gitkeep`
- `jest-preprocess.js`
- `loadershim.js`

### In your `pacakge.json` file

```json
"jest": {
	"transform": {
		"^.+\\.jsx?$": "<rootDir>/jest-preprocess.js"
	},
	"testRegex": "/.*(__tests__\\/.*)|(.*(test|spec))\\.jsx?$",
	"moduleNameMapper": {
		".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
		".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
	},
	"testPathIgnorePatterns": [
		"node_modules", ".cache", "__snapshots__"
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
"scripts": {
	"test": "jest",
},
```

## Usage

- `yarn test`