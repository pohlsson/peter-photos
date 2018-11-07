const initialValues = {
  albums: [],
  selectedAlbum: undefined,
};

export const getSelectedAlbum = state => {
  return state.albumsReducer.albums[0]
};

export const albumsReducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'GET_ALBUMS_DONE':
      return {
        ...state,
        albums: action.payload.albums,
      };
    default:
      return state;
  }
};