module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Add this line to recognize `module`
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-undef': 'off', // Optional: Turn off 'no-undef' rule globally
  },
};

