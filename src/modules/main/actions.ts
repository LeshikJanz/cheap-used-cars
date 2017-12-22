import { createAction } from 'utils/createAction';

export const autocompleteSearchInit = createAction('AUTOCOMPLETE_SEARCH_INIT');
export const autocompleteSearchDone = createAction('AUTOCOMPLETE_SEARCH_DONE');
export const autocompleteSearchError = createAction('AUTOCOMPLETE_SEARCH_ERROR');

export const fetchCarsInit = createAction('FETCH_CARS_INIT');
export const fetchCarsDone = createAction('FETCH_CARS_DONE');
export const fetchCarsError = createAction('FETCH_CARS_ERROR');