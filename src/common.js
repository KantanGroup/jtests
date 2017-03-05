

const countries = require('./data/countries.json');

export const capitalize = function capitalize(text) {
  return text.toLowerCase().replace(/\b\w/g, m => m.toUpperCase());
};

export const getLanguageCode = function getLanguageCode(countryName) {
  let languageCode = 'en';
  const countryNameRename = countryName.split('-').join(' ');
  countries.forEach((country) => {
    if (country.countryName.toLowerCase() === countryNameRename.toLowerCase()) {
      languageCode = country.languageCode;
    }
  });
  return languageCode;
};

export const getCountryCode = function getCountryCode(countryName) {
  let countryCode = 'us';
  const countryNameRename = countryName.split('-').join(' ');
  countries.forEach((country) => {
    if (country.countryName.toLowerCase() === countryNameRename.toLowerCase()) {
      countryCode = country.countryCode;
    }
  });
  return countryCode;
};
