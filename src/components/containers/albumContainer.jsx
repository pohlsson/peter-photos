import React from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import {actions as apiActions} from 'actions/apiActions';
import {getSelectedAlbum} from 'reducers/albumsReducer';
import {Photo} from 'components/common/photo';

const StyledAlbumContainer = styled.section`
`;


export const AlbumContainer = props => {
  const {album} = props;
  const {photos} = album;
  return (
    <StyledAlbumContainer>
      {photos.map(photo => (
        <Photo key={photo.id} {...photo} />
      ))}
    </StyledAlbumContainer>
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



