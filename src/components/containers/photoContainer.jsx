import React from 'react';
import styled from 'styled-components';

const StyledPhotoWrapper = styled.div`
 
`;

const StyledPhoto = styled.img`
    height: 100%;
    width: 100%;
`;

export const Photo = (props) => {
    const {onSelectPhoto, height, width, img} = props;
    return (
        <StyledPhotoWrapper onClick={onSelectPhoto} height={height} width={width}>
            <StyledPhoto src={img.fields.file.url} />
        </StyledPhotoWrapper>
    )
};