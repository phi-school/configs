import { defineConfig } from 'eslint-define-config'
import { isPackageExists } from 'local-pkg'

export default defineConfig(
	isPackageExists('astro')
		? {
				overrides: [
					{
						files: ['*.astro'],

						extends: [
							// https://github.com/ota-meshi/eslint-plugin-astro
							'plugin:astro/recommended',
							'plugin:astro/jsx-a11y-recommended',
						],

						parser: 'astro-eslint-parser',

						parserOptions: {
							parser: '@typescript-eslint/parser',
							extraFileExtensions: ['.astro'],
						},

						settings: {
							'import/resolver': {
								typescript: {},
							},
						},
					},
					{
						// enable ts for client-side script tags
						files: ['**/*.astro/*.js', '*.astro/*.js'],
						parser: '@typescript-eslint/parser',
					},
					{
						files: ['*.js', '*.jsx', '*.ts', '*.tsx', '*.astro'],
						rules: {
							// TODO TEST This may be able to be removed.
							'import/no-unresolved': [
								'error',
								{
									ignore: ['astro:'],
								},
							],
						},
					},
					{
						files: ['env.d.ts'],
						rules: {
							'@typescript-eslint/triple-slash-reference': 'off',
						},
					},
				],
			}
		: {},
)
