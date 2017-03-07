

const countries = require('./data/countries.json');

export const capitalize = function capitalize(text) {
  const data = text.toLowerCase().replace(/\b\w/g, m => m.toUpperCase());
  return data.replace(' And ', ' and ');
};

export const getI18n = function getI18n(countryCode) {
  let languageCode = 'en-US';
  countries.forEach((country) => {
    if (country.countryCode.toLowerCase() === countryCode.toLowerCase()) {
      languageCode = `${country.languageCode.toLowerCase()}-${countryCode.toUpperCase()}`;
    }
  });
  return languageCode;
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

export const getCountryName = function getCountryName(countryCode) {
  let countryName = 'United States';
  countries.forEach((country) => {
    if (country.countryCode.toLowerCase() === countryCode.toLowerCase()) {
      countryName = country.countryName;
    }
  });
  return countryName;
};
