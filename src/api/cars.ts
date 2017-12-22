import { request } from './base';

export const fetchCarsAutocomplete = (name: string) =>
  request
    .get(`products/autocomplete`, { search: name })
    .then((res) => res);