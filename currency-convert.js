require('dotenv').config();
const axios = require('axios');

const getExchangeRate = async (from, to) => {
  const response = await axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.FIXER_API_KEY}`)
  const euro = 1 / response.data.rates[from];
  const rate = euro * response.data.rates[to];
  return rate;
};

const getCountries = async (currencyCode) => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
  return response.data.map((country) => country.name);
};

getExchangeRate('GBP', 'NZD').then((rate) => {
  console.log(rate);
});

getCountries('NZD').then((countries) => {
  console.log(countries);
});