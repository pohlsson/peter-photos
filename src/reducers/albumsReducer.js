const initialValues = {
  albums: [],
  selectedAlbumId: undefined,
};

export const getSelectedAlbum = state => {
  return state.albumsReducer.albums.filter(album => (
      album.id === state.albumsReducer.selectedAlbumId)
  )[0];
};

export const albumsReducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'GET_ALBUMS_DONE':
      return {
        ...state,
        albums: action.payload.albums,
        selectedAlbumId: action.payload.albums[0].id,
      };
    default:
      return state;
  }
};