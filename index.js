const request = require('sync-request');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

function getJSONTranslations(url, language) {
    return Object.keys(languages).map(language => {
        return JSON.parse(response.getBody());
    });
}

function apply(options, compiler) {
    const { output, url, languages } = options;

    compiler.hooks.entryOption.tap('JSONTranslationsPlugin', () => {
        const directory = path.join(compiler.context, output);
        mkdirp(directory);

        for (const language in languages) {
            const response = request('GET', `${url}/${language}`);
            const translations = response.getBody();

            fs.writeFileSync(path.join(directory, `/${language}.json`), translations);
        }
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
