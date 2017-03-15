import moment from 'moment';

const countries = require('./data/countries.json');

export const capitalize = function capitalize(text) {
  const data = text.toLowerCase().replace(/\b\w/g, m => m.toUpperCase());
  return data.replace(' And ', ' and ');
};

export const labels = function labels() {
  const xDatas = [];
  let index = 28;
  do {
    xDatas.push(moment().subtract(index, 'days').format('MM/DD'));
    index -= 1;
  } while (index > -1);
  return xDatas;
};

function getIndexInTrendByDay(indexs, day) {
  const result = indexs.filter(obj => moment(obj.createAt).format('MM/DD') === day);
  return result.length === 0 ? 0 : result[0].index; // or undefined
}

function getChartInTrendByCollection(collections) {
  const chartData = [];
  let previousIndex = 0;
  labels().forEach((day) => {
    const currentIndex = getIndexInTrendByDay(collections, day);
    if (currentIndex === 0) {
      if (currentIndex !== previousIndex) {
        chartData.push(previousIndex);
      } else {
        chartData.push(null);
      }
    } else {
      chartData.push(currentIndex);
      previousIndex = currentIndex;
    }
  });
  return chartData;
}

export const getSeriesOfTrend = function getSeriesOfTrend(series, trend, category) {
  let categoryName = '';
  if (category !== 'all') {
    categoryName = `${capitalize(category.split('-').join(' '))} `;
  }
  if (trend.topgrossing && trend.topgrossing.length !== 0) {
    const chartData = {};
    chartData.name = `${categoryName}Topgrossing`;
    chartData.data = getChartInTrendByCollection(trend.topgrossing);
    series.push(chartData);
  }
  if (trend.topsellingFree && trend.topsellingFree.length !== 0) {
    const chartData = {};
    chartData.name = `${categoryName}Topselling Free`;
    chartData.data = getChartInTrendByCollection(trend.topsellingFree);
    series.push(chartData);
  }
  if (trend.topsellingPaid && trend.topsellingPaid.length !== 0) {
    const chartData = {};
    chartData.name = `${categoryName}Topselling Paid`;
    chartData.data = getChartInTrendByCollection(trend.topsellingPaid);
    series.push(chartData);
  }
  if (trend.topsellingNewFree && trend.topsellingNewFree.length !== 0) {
    const chartData = {};
    chartData.name = `${categoryName}Topselling New Free`;
    chartData.data = getChartInTrendByCollection(trend.topsellingNewFree);
    series.push(chartData);
  }
  if (trend.topsellingNewPaid && trend.topsellingNewPaid.length !== 0) {
    const chartData = {};
    chartData.name = `${categoryName}Topselling New Paid`;
    chartData.data = getChartInTrendByCollection(trend.topsellingNewPaid);
    series.push(chartData);
  }
  return series;
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
