import { autocompleteSearchInit } from './actions';
import { Task } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { IAction } from '../../interfaces/index';
import { fetchCarsAutocomplete } from '../../api/cars';

export function* autocompleteSearchSaga({ payload }: IAction): Iterator<object | Task> {
  try {
    const cars = yield fetchCarsAutocomplete(payload);
    console.log('cars');
    console.log(cars);
  } catch (error) {
  }
}

export function* carListSaga() {
  yield [
    takeEvery(autocompleteSearchInit().type, autocompleteSearchSaga)
  ]
}