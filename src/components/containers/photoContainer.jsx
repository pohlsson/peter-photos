import React from 'react';
import styled from 'styled-components';

const StyledPhotoWrapper = styled.div`
  flex: 1;
`;

const StyledPhoto = styled.img`
    height: 25%;
    width: 25%;
`;

export const Photo = (props) => {
    const {onSelectPhoto, height, width, img} = props;
    return (
        <StyledPhotoWrapper onClick={onSelectPhoto} height={height} width={width}>
            <StyledPhoto src={img.fields.file.url} />
        </StyledPhotoWrapper>
    )
};