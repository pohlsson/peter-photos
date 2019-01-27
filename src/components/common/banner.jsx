import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.section`
    background-color: ${props => props.theme.depth2};
    color: ${props => props.theme.background};
    width: 100%;
    height: ${props => props.size}em;
    line-height: ${props => props.size};
    font-size: ${props => props.size -2}em;
    font-weight: 600; 
    text-align: center;
`;

export const Banner = ({size, children}) => (
<StyledBanner size={size}>
    {children}
</StyledBanner>
);