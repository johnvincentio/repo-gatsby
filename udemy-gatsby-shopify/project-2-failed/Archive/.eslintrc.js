module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["airbnb"],
	plugins: ["react-hooks"],
	parser: "@babel/eslint-parser",
	parserOptions: {
		"ecmaVersion": 2020
	},
	rules: {
		"no-console": 0,
    "max-len": [
      "error",
      {
        "code": 120,
        "tabWidth": 2,
        "comments": 120,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignorePattern": "^import\\s.+\\sfrom\\s.+;$"
      }
    ],
    "indent": [2, "tab", { "SwitchCase": 1 }],
    "no-tabs": 0,
    "react/jsx-indent": [2, "tab"],
    "react/jsx-indent-props": [2, "tab"],
		"no-anonymous-exports-page-templates": "warn",
		"limited-exports-page-templates": "warn",
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
	}
};
