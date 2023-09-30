import { defineConfig } from 'eslint-define-config'

import { confusingBrowserGlobals } from '@/utils'

export default defineConfig({
	overrides: [
		{
			files: '*.sw.js',

			env: {
				serviceworker: true,
			},

			rules: {
				'no-restricted-globals': [
					'error',
					...confusingBrowserGlobals.filter((variable) => variable !== 'self'),
				],
			},
		},
	],
})
