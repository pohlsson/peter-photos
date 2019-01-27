import React from 'react';
import styled from 'styled-components';

const StyledAlbumInfo = styled.section`
    height: 100%;
    position: absolute;
    width: 20em;
    right: 1em;
    top: 15em;
    h2 {
        display: none;
    }
`;

export const AlbumInfo = () => {
    return (
        <StyledAlbumInfo></StyledAlbumInfo>
    )
};