# vite-eslint-plugin

[![npm](https://img.shields.io/npm/v/vite-eslint-plugin)](https://www.npmjs.com/package/vite-eslint-plugin)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/vite-eslint-plugin/peer/vite)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/vite-eslint-plugin/peer/eslint)
[![GitHub license](https://img.shields.io/github/license/sagarpanchal/vite-eslint-plugin)](https://github.com/sagarpanchal/vite-eslint-plugin/blob/master/LICENSE)

Better ESLint plugin for vite.
Forked From [vite-plugin-eslint](https://github.com/gxmari007/vite-plugin-eslint)

## Install

```bash
npm install eslint vite-eslint-plugin --save-dev
# or
yarn add eslint vite-eslint-plugin -D
```

## Usage

```js
import { defineConfig } from "vite"
import eslint from "vite-eslint-plugin"

export default defineConfig({
  plugins: [eslint()],
})
```

If you do not want the plugin to break dev, you can configure the plugin this way:

```js
import { defineConfig } from "vite"
import eslint from "vite-eslint-plugin"

export default defineConfig({
  plugins: [
    {
      // default settings on build (i.e. fail on error)
      ...eslint(),
      apply: "build",
    },
    {
      // do not fail on serve (i.e. local development)
      ...eslint({ failOnWarning: false, failOnError: false }),
      apply: "serve",
      enforce: "post",
    },
  ],
})
```

## Options

You can pass [eslint options](https://eslint.org/docs/developer-guide/nodejs-api#-new-eslintoptions).

### `eslintPath`

- Type: `string`
- Default: `eslint`

Path to `eslint` instance that will be used for linting.

### `lintOnStart`

- Type: `boolean`
- Default: `false`

Check all matching files on project startup, too slow, turn on discreetly.

### `include`

- Type: `string | string[]`
- Default: `['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.vue', '**/*.svelte']`

A single file, or array of files, to include when linting.

### `exclude`

- Type: `string | string[]`
- Default: `['**/node_modules/**']`

A single file, or array of files, to exclude when linting.

### `formatter`

- Type: `string | ESLint.Formatter['format']`
- Default: `stylish`

Custom error formatter or the name of a built-in formatter.

### `failOnWarning`

- Type: `boolean`
- Default: `false`

Will cause the module build to fail if there are any warnings, based on `emitWarning`.

### `failOnError`

- Type: `boolean`
- Default: `true`

Will cause the module build to fail if there are any errors, based on `emitError`.

## License

MIT
