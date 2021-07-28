import _, { debounce } from 'lodash';
import getRefs from './refs';
import { renderCountryList, clearContainer } from './renderMarkup';
import { getErrorMessage } from './notifications';

const BASE_URL = 'https://restcountries.eu/rest/v2/name/';
const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, 300));

function onSearch(e) {
  e.preventDefault();
  const form = e.target;
  const searchQuery = form.value;
  if (searchQuery.length === 0) {
    clearContainer();
    return;
  }
  fetchCountry(searchQuery)
    .then(renderCountryList)
    .catch(error => console.log(error));
}

function fetchCountry(name) {
  return fetch(`${BASE_URL}${name}?fields=name;capital;flag;languages;population`).then(
    response => {
      if (!response.ok) {
        clearContainer();
        throw new Error(getErrorMessage());
      }
      return response.json();
    },
  );
}
