import { carListSaga } from './main/sagas';

export default function* rootSaga() {
  yield [
    carListSaga
  ];
}
