import React from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import {actions as apiActions} from 'actions/apiActions';
import {getSelectedAlbum} from 'reducers/albumsReducer';
import AlbumContainer from 'components/containers/albumContainer';

const StyledMainContainer = styled.main`
  height: 100%;
`;

export const MainContainer = props => {
  const {album} = props;
  return (
    <StyledMainContainer>
      {album && <AlbumContainer/>}
    </StyledMainContainer>
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
)(MainContainer);



