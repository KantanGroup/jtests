

const countries = require('./data/countries.json');

export const capitalize = function capitalize(text) {
  return text.toLowerCase().replace(/\b\w/g, m => m.toUpperCase());
};

export const getLanguageCode = function getLanguageCode(countryCode) {
  let languageCode = 'en';
  countries.forEach((country) => {
    if (country.countryCode === countryCode) {
      languageCode = country.languageCode;
    }
  });
  return languageCode;
};
