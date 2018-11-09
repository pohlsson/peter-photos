import React from 'react';
import styled from 'styled-components';

const StyledPhotoWrapper = styled.section`
  padding: 0.25em;
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
  width: ${props => props.width};
  height: ${props => props.width};
  object-fit: cover;
`;

export const Photo = (props) => {
  const {title, file, width} = props;
  return (
    <StyledPhotoWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledPhoto src={file.url}  width={width}/>
    </StyledPhotoWrapper>
  )
};