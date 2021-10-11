import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../styles/Container.styles';
const Header = () => {
    return (
        <div>
        <HeaderContainer>
            <Container>
                    <NavContent>
                        <Brand>
                            <h1>Microsoft Center</h1>
                        </Brand>
                        <NavList>
                            <li>
                                <NavLink to ='/home'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to ='/about'>About</NavLink>
                            </li>
                            <li>
                                <NavLink to ='/courses'>Courses</NavLink>
                            </li>
                            <li>
                                <NavLink to ='/contact'>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to ='/sign-in'>Sign In</NavLink>
                            </li>
                        </NavList>
                    </NavContent>
            </Container>
        </HeaderContainer>
        </div>
    );
};

export default Header;


const HeaderContainer = styled.div`
     background-color: #03A62C;
     height: 60px;
     color: white;
     display: flex;
     align-items: center;
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Brand = styled.div`
   & h1 {
       letter-spacing: 1px;
   }
`

const NavList = styled.ul`
        display: flex;
        list-style: none;
        & li {
            margin: 5px 12px;
            padding: 6px 13px;
        }
        & li a {
            text-decoration: none;
            color: white;
            transition: all 0.5s ease-in-out;
        }
        & li a:hover {
            border-bottom: 1px solid white;
        }
`