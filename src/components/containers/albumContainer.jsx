import React, {Component} from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import Gallery from 'react-grid-gallery';
import {actions as apiActions} from 'actions/apiActions';
import {getSelectedAlbum} from 'reducers/albumsReducer';

const StyledAlbumWrapper = styled.section`
    height: 100%;
    padding: 4em;
    flex: 4;
    margin-left: 10em;
`;

const StyledAlbum = styled.article`
`;

export class AlbumContainer extends Component {
    constructor(props){
        super(props);
        this.albumRef = React.createRef();
    }

    componentDidMount () {
        this.props.dispatchSetAlbumWidth(this.albumRef.current.offsetWidth)
    }

    calcPhotoWidth(numberOfPhotos, albumWidth) {
        console.log(numberOfPhotos, albumWidth)
       }

    render() {
        const images = this.props.album.photos.map(photo => ({
                src: photo.file.url,
                thumbnail: photo.file.url,
                caption: photo.title,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
            }));
        return (
            <StyledAlbumWrapper>
                <StyledAlbum ref={this.albumRef}>
                    <Gallery
                        images={images}
                        enableImageSelection={false}
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
