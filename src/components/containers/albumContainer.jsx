import React, {Component} from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import Gallery from 'react-photo-gallery';
import {actions as apiActions} from 'actions/apiActions';
import {getSelectedAlbum} from 'reducers/albumsReducer';
import {Photo} from "./photoContainer";

const StyledAlbumWrapper = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
`;

const StyledAlbum = styled.article`
    display: flex;
    padding-left: 25em;
    padding-right: 25em;
    padding-top: 5em;
    height: 100%;
`;

export class AlbumContainer extends Component {
  constructor(props) {
    super(props);
    this.albumRef = React.createRef();
  }

  componentDidMount() {
    this.props.dispatchSetAlbumWidth(this.albumRef.current.offsetWidth)
  }

  calcPhotoWidth(numberOfPhotos, albumWidth) {
    console.log(numberOfPhotos, albumWidth)
  }

  render() {
    const {photos} = this.props.album;
    return (
      <StyledAlbumWrapper>
        <StyledAlbum ref={this.albumRef}>
          <Gallery
            photos={photos.map(photo => ({
            src: photo.img.fields.file.url,
            width: photo.width,
            height: photo.height,
          }))}
          />
        </StyledAlbum>
      </StyledAlbumWrapper>
    )
  };
}

const mapStateToProps = state => ({
  album: getSelectedAlbum(state),
  albumWidth: state.albumsReducer.albumWidth,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetPhotos: () => dispatch(apiActions.getPhotos()),
  dispatchSetAlbumWidth: albumWidth => (
    dispatch(apiActions.setAlbumWidth({albumWidth})
    )),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumContainer);
