# json-translations-webpack-plugin
Webpack plugin for generating json from translations endpoint

### Installation

```shell
npm install generate-json-webpack-plugin
```

### Usage

```js
// webpack.config.js
const JSONTranslationsPlugin = require('json-translations-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    // ...
    new JSONTranslationsPlugin({
      url: 'https://www.example.com/translations',
      output: 'assets/i18n',
      languages: ['en', 'de', 'fr']
    })
  ]
  // ...
};
```

This will create files `en.json`, `de.json`, `fr.json` in `assets/i18n` output directory, with content received from following endpoints: 

* `https://www.example.com/translations/en`
* `https://www.example.com/translations/de`
* `https://www.example.com/translations/fr`

