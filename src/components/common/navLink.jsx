import React from 'react';
import styled from 'styled-components';

const StyledNavLink = styled.a`
    flex: 1;
    color: ${props => props.theme.depth3};
    padding: 1em;
    cursor: pointer;
    text-align: right;
    &:hover {
        color: ${props => props.theme.depth1}
    }
`;

export const NavLink = ({children, ...other}) => (
    <StyledNavLink {...other}>
        {children}
    </StyledNavLink>
);