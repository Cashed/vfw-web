module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react",
    "flowtype"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:flowtype/recommended"
  ],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  },
  "rules": {
    "no-console": 0
  }
};
