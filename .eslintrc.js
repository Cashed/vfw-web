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
    "react"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ]
}
