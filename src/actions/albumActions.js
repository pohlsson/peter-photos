export const actionTypes = {
    SET_SELECTED_ALBUM: 'SET_SELECTED_ALBUM',
};

export const actions = {
    setSelectedAlbum: payload => ({
        type:  actionTypes.SET_SELECTED_ALBUM,
        payload,
    }),
};


