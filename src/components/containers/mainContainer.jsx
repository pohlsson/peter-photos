import React from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import {actions as apiActions} from 'actions/apiActions';
import {getSelectedAlbum} from 'reducers/albumsReducer';
import AlbumContainer from 'components/containers/albumContainer';
import PhotoOptionsContainer from 'components/containers/photoOptionsContainer';
import {AlbumInfo} from "./albumInfoContainer";
import {Banner} from "../common/banner";

const StyledMainContainer = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const MainContainer = props => {
  const {album} = props;
  return (
    <StyledMainContainer>
        <Banner>Peter Photos</Banner>
      <PhotoOptionsContainer />
      {album && <AlbumContainer/>}
      <AlbumInfo/>
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



