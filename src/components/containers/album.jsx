import React from 'react'
import {connect} from 'react-redux';
import {actions as apiActions} from 'actions/apiActions';
import {getSelectedAlbum} from 'reducers/albumsReducer';

export const Album = (album) => {
  const {photos} = album.fields;
  return (
    <section>
      {photos.map(photo => (
        <section key={photo.sys.id}>
          <img src={photo.fields.file.url} />
        </section>
      ))}
    </section>
  )
};

const mapStateToProps = state => ({
  album: getSelectedAlbum(state),
});

const mapDispatchToProps = dispatch => ({
  dispatchGetPhotos: () => dispatch(apiActions.getPhotos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Album);



