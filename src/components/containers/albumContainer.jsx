import React, {Component} from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import {actions as apiActions} from 'actions/apiActions';
import {getSelectedAlbum} from 'reducers/albumsReducer';
import {Photo} from "./photoContainer";

const StyledAlbumWrapper = styled.section`
    height: 100%;
    padding: 10em;
    flex: 4;
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
        const {photos} = this.props.album;
        console.log(photos)
        return (
            <StyledAlbumWrapper>
                <StyledAlbum ref={this.albumRef}>
                    {photos.map(photo => (
                        <Photo {...photo} />
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
