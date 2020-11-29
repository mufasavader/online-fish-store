import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
        return (
            <NavWrapper>
                <h1>footer</h1>
            </NavWrapper>
        )
    }
}


const NavWrapper= styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: capitalize;
}
.noHover{
    pointer-events: none;
}
`
