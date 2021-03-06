# 🚷 plugin-lib-prettier-eslint

[![npm](https://img.shields.io/npm/v/@start/plugin-lib-prettier-eslint.svg?style=flat-square)](https://www.npmjs.com/package/@start/plugin-lib-prettier-eslint) [![linux](https://img.shields.io/travis/deepsweet/start/master.svg?label=linux&style=flat-square)](https://travis-ci.org/deepsweet/start) [![windows](https://img.shields.io/appveyor/ci/deepsweet/start/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/deepsweet/start) [![coverage](https://img.shields.io/codecov/c/github/deepsweet/start/master.svg?style=flat-square)](https://codecov.io/github/deepsweet/start) [![deps](https://david-dm.org/deepsweet/start.svg?path=packages/plugin-lib-prettier-eslint&style=flat-square)](https://david-dm.org/deepsweet/start?path=packages/plugin-lib-prettier-eslint)

Fix code(style) using [Prettier + ESLint](https://github.com/prettier/prettier-eslint).

## Install

```sh
$ yarn add --dev @start/plugin-lib-prettier-eslint
# or
$ npm install --save-dev @start/plugin-lib-prettier-eslint
```

## Usage

### Signature

```ts
prettierEslint(options?: {})
```

#### `options`

[prettier-eslint options](https://github.com/prettier/prettier-eslint#options).

### Example

```js
import sequence from '@start/plugin-sequence'
import find from '@start/plugin-find'
import read from '@start/plugin-read'
import prettierEslint from '@start/plugin-lib-prettier-eslint'
import overwrite from '@start/plugin-overwrite'

export const task = () =>
  sequence(
    find('src/**/*.js'),
    read,
    prettierEslint(),
    overwrite
  )
```
