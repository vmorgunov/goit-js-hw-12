import oneCountry from '../templates/country.hbs';
import allCountries from '../templates/countries.hbs';
import { getErrorMessage, getWarningMessage } from './notifications';
import getRefs from './refs';

const refs = getRefs();

function renderCountryList(countries) {
  if (countries.length >= 2 && countries.length <= 10) {
    renderCountries(countries);
    return;
  }
  if (countries.length === 1) {
    clearContainer();
    renderCountry(countries);
    return;
  }
  if (countries.length > 10) {
    getWarningMessage();
    return;
  }
  if (!countries) {
    clearContainer();
    getErrorMessage();
    return;
  }
}

function renderCountries(countries) {
  const markup = allCountries(countries);
  refs.container.innerHTML = markup;
}

function renderCountry(country) {
  const markup = oneCountry(country[0]);
  refs.container.innerHTML = markup;
}

function clearContainer() {
  refs.container.innerHTML = '';
}

export { renderCountryList, clearContainer };
