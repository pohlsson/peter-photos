import React from 'react';
import styled from 'styled-components';

const StyledPhotoWrapper = styled.section`

`;

const StyledPhoto = styled.img`
`;

export const Photo = (props) => {
  const {title, file} = props;
  return (
    <StyledPhotoWrapper>
      <h2>{title}</h2>
      <StyledPhoto src={file.url} />
    </StyledPhotoWrapper>
  )
};