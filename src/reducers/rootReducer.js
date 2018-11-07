import {combineReducers} from 'redux';
import {albumsReducer} from 'reducers/albumsReducer';

const reducers = combineReducers({
  albumsReducer,
});

export default reducers;