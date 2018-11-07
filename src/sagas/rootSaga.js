import {fork, takeEvery} from 'redux-saga/effects';
import {actionTypes as apiActionTypes} from 'actions/apiActions';
import {getAlbums} from 'sagas/apiSagas';

function* watchGetAlbums() {
  yield takeEvery(apiActionTypes.GET_ALBUMS, getAlbums);
}

export default function* sagas() {
  yield fork(watchGetAlbums);
}

