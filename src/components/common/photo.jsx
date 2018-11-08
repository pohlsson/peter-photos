import React from 'react';
import styled from 'styled-components';

const StyledPhotoWrapper = styled.section`
  width: 100%;
  &:hover h2 {
    display: block;
  }
`;

const StyledTitle = styled.h2`
  display: none;
  position: absolute;
  background-color: #ccc;
  padding: 1em;
`;

const StyledPhoto = styled.img`
  width: 100%;
`;

export const Photo = (props) => {
  const {title, file} = props;
  return (
    <StyledPhotoWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledPhoto src={file.url} />
    </StyledPhotoWrapper>
  )
};