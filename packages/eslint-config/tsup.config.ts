import { defineConfig } from 'tsup'

import baseConfig from '../../tsup.config'

export default defineConfig({
	...baseConfig,
	dts: false,
	entry: ['src/**/*.ts'],
	format: ['cjs'],
})
