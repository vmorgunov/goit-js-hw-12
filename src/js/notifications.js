import Notiflix from 'notiflix';

export function getWarningMessage() {
  Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
}

export function getErrorMessage() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
