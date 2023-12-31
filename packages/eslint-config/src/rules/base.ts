import { defineConfig } from 'eslint-define-config'

import { confusingBrowserGlobals } from '@/utils'

export default defineConfig({
	// https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js
	extends: 'eslint:recommended',

	env: {
		browser: true,
		node: true,
		/**
		 * Globals shared across Node.js and Browser
		 * https://github.com/sindresorhus/globals/blob/v13.18.0/globals.json#L1711
		 */
		'shared-node-browser': true,
	},

	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},

	rules: {
		'no-restricted-globals': ['error', ...confusingBrowserGlobals],
	},

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
})
