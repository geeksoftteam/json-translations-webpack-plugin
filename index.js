const request = require('sync-request');

function getJSONTranslations(url, language) {
  return Object.keys(languages).map(language => {
    return JSON.parse(response.getBody());
  });
}

function apply(options, compiler) {
  compiler.plugin('emit', function (compilation, callback) {
    const { output, url, languages } = options;

    for (const language in languages) {
      const response = request('GET', `${url}/${language}`);
      const translations = response.getBody();

      compilation.assets[`${output}/${language}.json`] = {
        source: () => translations,
        size: () => translations.length,
      };
    };

    callback();
  });
};

/**
 * @constructor
 * @param {string} url - Url to server endpoint.
 * @param {string} output - Destination folder.
 * @param {string[]} languages - Array of languages.
 */
function JSONTranslationsPlugin(options) {
  return {
    apply: apply.bind(this, options)
  };
}

module.exports = JSONTranslationsPlugin;
