import {put, call} from 'redux-saga/effects';
import {actionTypes as apiActionTypes} from 'actions/apiActions';
import actionStates from 'actions/actionStates';

const contentful = require('contentful');

const client = contentful.createClient({
  space: '2w1ukpsa4chn',
  accessToken: '1a18ff64bd070b9667080858069c2f585a7405705072daa033cf48988c032c72',
});

export function* getAlbums() {
  try {
    const {items} = yield call(client.getEntries, {content_type: 'album'});
    yield put({
      type: apiActionTypes.GET_ALBUMS + actionStates.DONE,
      payload: {
        albums: items,
      },
    })
  } catch (e) {
    yield put({
      type: apiActionTypes.GET_ALBUMS + actionStates.ERROR,
      message: e.message,
    });
  }
}
