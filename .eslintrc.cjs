module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended"
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh"],
	rules: {
		//hoc (memo 사용시 eslint 오류구문 출력 안함)
		"react-refresh/only-export-components": "off",
		"react/jsx-no-target-blank": "off",
		"react/prop-types": "off"
		// "react-refresh/only-export-components": [
		// 	"warn",
		// 	{ allowConstantExport: true }
		// ]
	}
};
//test override
