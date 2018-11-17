import React from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import {actions as albumActions} from 'actions/albumActions';
import {NavLink} from 'components/common/navLink';

const StyledPhotoOptionsWrapper = styled.section`
    height: 100%;
    width: 10em;
    position: absolute;
    padding-top: 7em;
    h2 {
        display: none;
    }
    border-right: 1px solid ${props => props.theme.depth1};
`;

const StyledPhotoOptions = styled.nav`
    display: flex;
    flex-direction: column;
`;

export const PhotoOptionsContainer = ({albums, dispatchSetSelectedAlbum}) => {
    return (
        <StyledPhotoOptionsWrapper>
            <h2>Photo options</h2>
            <StyledPhotoOptions>
                {albums.map(album => (
                    <NavLink onClick={() => dispatchSetSelectedAlbum(album.id)}>
                        {album.title}
                    </NavLink>
                ))}
            </StyledPhotoOptions>
        </StyledPhotoOptionsWrapper>
    )
}

const mapStateToProps = state => ({
    albums: state.albumsReducer.albums,
});

const mapDispatchToProps = dispatch => ({
    dispatchSetSelectedAlbum: albumId => dispatch(albumActions.setSelectedAlbum({albumId})),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PhotoOptionsContainer);
