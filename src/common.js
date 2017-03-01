

const countries = require('./data/countries.json');

export const capitalize = function capitalize(text) {
  return text.toLowerCase().replace(/\b\w/g, m => m.toUpperCase());
};

export const getLanguageCode = function getLanguageCode(countryName) {
  let languageCode = 'en';
  countries.forEach((country) => {
    if (country.countryName.toLowerCase() === countryName.toLowerCase()) {
      languageCode = country.languageCode;
    }
  });
  return languageCode;
};

export const getCountryCode = function getCountryCode(countryName) {
  let countryCode = 'us';
  countries.forEach((country) => {
    if (country.countryName.toLowerCase() === countryName.toLowerCase()) {
      countryCode = country.countryCode;
    }
  });
  return countryCode;
};
