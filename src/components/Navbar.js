import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../favicon-32x32.png';
import {ButtonContainer} from './Button'; 



export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/"  className="align-center">
        <img src={logo} alt="" className="navbar-brand"></img>
        
            
        </Link>
        <ul className ="navbar-nav align-items-center">
            <li className="nav-item ml-5">
                <Link to="/"  id="logo" className="nav-link">
                    Products
                </Link>
            </li>
        </ul>
        <Link to='/cart' className="ml-auto">

        <ButtonContainer>
            <i className="fas fa-cart-plus"> My Cart</i>
        </ButtonContainer>    
        </Link>

    
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
