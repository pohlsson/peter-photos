const initialValues = {
  albums: [],
  albumWidth: undefined,
  selectedAlbumId: undefined,
};

export const getAlbumById = (state, albumId) => (
    state.albumsReducer.albums.filter(album => (
        album.id === albumId
    ))[0]
);

export const getSelectedAlbum = state => (
    getAlbumById(state, state.albumsReducer.selectedAlbumId)
);

export const getPhotoUrlsInAlbumById = (state, albumId) =>  (
    getAlbumById(state, albumId).photos
);

export const albumsReducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'GET_ALBUMS_DONE':
      return {
        ...state,
        albums: action.payload.albums,
        selectedAlbumId: action.payload.albums[0].id,
      };
    case 'SET_ALBUM_WIDTH':
        return {
            ...state,
            albumWidth: action.payload.albumWidth,
        };
    default:
      return state;
  }
};