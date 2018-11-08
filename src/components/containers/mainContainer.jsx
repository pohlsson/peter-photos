import React from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import {actions as apiActions} from 'actions/apiActions';
import {getSelectedAlbum} from 'reducers/albumsReducer';
import {Photo} from 'components/common/photo';

const StyledMainContainer = styled.main`
`;

const StyledAlbum = styled.article`
  padding: 5em;
  display: flex;
  flex-wrap: wrap;
`;

export const MainContainer = props => {
  const {album} = props;
  return (
    <StyledMainContainer>
      {album &&
      <StyledAlbum>
        {album.photos.map(photo => (
          <Photo key={photo.id} {...photo} />
        ))}
      </StyledAlbum>
      }
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



