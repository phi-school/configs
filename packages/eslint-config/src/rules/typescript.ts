import { defineConfig } from 'eslint-define-config'
import { isPackageExists } from 'local-pkg'

export default defineConfig(
	isPackageExists('typescript')
		? {
				overrides: [
					{
						files: ['*.ts', '*.tsx'],

						extends: [
							// https://typescript-eslint.io/
							'plugin:@typescript-eslint/recommended',

							// https://github.com/import-js/eslint-plugin-import/blob/6c8981d/config/typescript.js
							'plugin:import/typescript',
						],

						parser: '@typescript-eslint/parser',

						settings: {
							'import/parsers': {
								'@typescript-eslint/parser': ['.ts', '.tsx'],
							},

							'import/resolver': {
								typescript: {
									alwaysTryTypes: true,
									project: [
										'./tsconfig.json', // for single-package repos
										'packages/*/tsconfig.json', // for monorepos
										'scripts/*/tsconfig.json',
									],
								},
							},
						},

						rules: {},
					},
				],
		  }
		: {},
)
