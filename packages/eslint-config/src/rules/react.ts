import { defineConfig } from 'eslint-define-config'
import { isPackageExists } from 'local-pkg'

export default defineConfig(
	isPackageExists('react')
		? {
				overrides: [
					{
						files: '*.{jsx,tsx}',

						extends: [
							// https://github.com/jsx-eslint/eslint-plugin-react
							'plugin:react/recommended',

							// https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
							'plugin:react-hooks/recommended',

							// Using JSX transform as of React 17
							// https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports
							'plugin:react/jsx-runtime',
						],

						settings: {
							react: {
								version: 'detect',
							},
						},

						rules: {
							'react/jsx-max-props-per-line': [
								'error',
								{
									maximum: 1,
								},
							],

							// Use TypeScript
							'react/prop-types': 'off',

							'unicorn/filename-case': [
								'error',
								{
									case: 'pascalCase',
									ignore: [/^.+\.(?:spec\.[jt]sx?|test\.[jt]sx?)$/],
								},
							],
						},
					},
				],
			}
		: {},
)
