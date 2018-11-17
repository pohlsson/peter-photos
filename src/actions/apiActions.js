export const actionTypes = {
    GET_ALBUMS: 'GET_ALBUMS',
    SET_ALBUM_WIDTH: 'SET_ALBUM_WIDTH',
};

export const actions = {
    getPhotos: () => ({
        type: actionTypes.GET_ALBUMS,
    }),
    setSelectedAlbum: payload => ({
       type:  actionTypes.SET_SELECTED_ALBUM,
        payload,
    }),
    setAlbumWidth: payload => ({
        type: actionTypes.SET_ALBUM_WIDTH,
        payload,
    })

};


