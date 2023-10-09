<a name="readme-top"></a>

<br/>

<div align="center">

<h1>@phi.school/eslint-config</h1>

<p>
  A dynamic ESLint configuration for multiple frameworks, available as a single dependency.
</p>

<!-- Quick Project Links -->

[Changelog][changelog-link] · [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

<!-- Shield Group -->

[![NPM Package Badge][npm-shield]][npm-link]

</div>

<br/>

## Table of Contents

- [Features](#features)
- [Supported Frameworks](#supported-frameworks)
  - [Examples](#examples)
- [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Features

- Dynamic ESLint rules based on your project's dependencies such as React, TypeScript, Svelte, Vue, and more.
- Installs as a single `devDependency`: No need to [install a bunch of internally extended configs](https://github.com/eslint/eslint/issues/3458#issue-102077087)
- Optionally overrides ESLint formatting with [Prettier](https://prettier.io/)

<div align="right">
  
[![Back to Top Badge][back-to-top]](#readme-top)

</div>

## Supported Frameworks

- [Astro](https://astro.build/)
- [JSON](https://ota-meshi.github.io/eslint-plugin-jsonc/)
- [Jest](https://jestjs.io/)
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/) (with rules for [hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) and [a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y))
- [Svelte](https://svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue.js](https://vuejs.org/)

Lint rules for a file are determined by its extension and the project's dependencies.

### Examples

1. A file with a `.tsx` extension inside of a project with dependencies on `typescript`, `react`, and `prettier` will be linted with rules for TypeScript, React, and Prettier; Svelte or Vue rules will not be applied.
2. A file whose name matches the glob `**/*.{spec,test}.{js?(x),ts?(x)}` inside of a project with a dependency on `jest` will be linted with Jest rules.

<div align="right">
  
[![Back to Top Badge][back-to-top]](#readme-top)

</div>

## Internally extended configurations

Beyond framework-specific rules, common lint rules are also sourced from the following configs/plugins:

- [confusing-browser-globals](https://github.com/facebook/create-react-app/tree/main/packages/confusing-browser-globals)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) (only if your project depends on `prettier`)
- [eslint-plugin-eslint-comments](https://mysticatea.github.io/eslint-plugin-eslint-comments/)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native)
- [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
- [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

<div align="right">
  
[![Back to Top Badge][back-to-top]](#readme-top)

</div>

## Installation

```sh
pnpm i -D @phi.school/eslint-config
```

<div align="right">
  
[![Back to Top Badge][back-to-top]](#readme-top)

</div>

## Usage

Extend this package in your local eslint config or `package.json`:

**ESLint Config:**

```json
// .eslintrc.json
{
  "extends": ["@phi.school/eslint-config"]
}
```

**package.json:**

```json
"eslintConfig": {
  "extends": [
    "@phi.school/eslint-config"
  ]
}
```

<div align="right">
  
[![Back to Top Badge][back-to-top]](#readme-top)

</div>

## Roadmap

- [ ] Adopt ESLint's new [Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new) format.

<div align="right">
  
[![Back to Top Badge][back-to-top]](#readme-top)

</div>

## Contributing

We welcome contributions! For a detailed guide on how to contribute, please refer to the [Contributing](../../README.md#contributing) section in the main README of the repository.

## License

Released under the [MIT](./LICENSE) License. © 2023-Present [phi school](https://phi.school)

<div align="right">
  
[![Back to Top Badge][back-to-top]](#readme-top)

</div>

<!-- Link Group -->

[back-to-top]: https://img.shields.io/badge/-⇧_Back_To_Top-black?style=flat-square
[changelog-link]: ./CHANGELOG.md
[github-issues-link]: https://github.com/phi-school/config/issues
[license]: ./LICENSE
[npm-link]: https://www.npmjs.com/package/@phi.school/eslint-config
[npm-shield]: https://img.shields.io/npm/v/@phi.school/eslint-config?color=black&style=for-the-badge
