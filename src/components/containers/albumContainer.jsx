import React from 'react'
import {connect} from 'react-redux';
import {actions as apiActions} from 'actions/apiActions';
import {getSelectedAlbum} from 'reducers/albumsReducer';

export const AlbumContainer = props => {
  const {album} = props;
  console.log(album)
  const {photos} = album;
  return (
    <section>
      {photos.map(photo => (
        <section key={photo.id}>
          <img src={photo.file.url} />
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
)(AlbumContainer);



