import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.section`
    background-color: ${props => props.theme.depth2};
    color: ${props => props.theme.background};
    width: 100%;
    height: 5em;
    line-height: 5;
    font-size: 3em;
    font-weight: 600; 
    text-align: center;
`;

export const Banner = ({children}) => (
<StyledBanner>
    {children}
</StyledBanner>
);