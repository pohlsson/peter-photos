import React, {Component} from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import {actions as apiActions} from 'actions/apiActions';
import {getSelectedAlbum} from 'reducers/albumsReducer';
import {Photo} from 'components/common/photo';


const StyledAlbumWrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

const StyledAlbum = styled.article`
  padding: 5em;
  display: flex;
  flex-wrap: wrap;
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
        const {album, albumWidth} = this.props;
        return (
            <StyledAlbumWrapper>
                <StyledAlbum ref={this.albumRef}>
                    {album.photos.map(photo => (
                        <Photo
                            key={photo.id}
                            width={this.calcPhotoWidth(album.photos.length, albumWidth)}
                            {...photo}
                        />
                    ))}
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



