import React from 'react';
import styled from 'styled-components';
import HeroImg from '../../assets/hero-img.jpg';
import { Container } from '../../styles/Container.styles';
const HeroSection = () => {
    return (
        <HeroContainer style={{backgroundImage: `url(${HeroImg})`}}>
              <Container>
                   <HeroContent>
                       <div>
                           <h1>Microsoft Center</h1>
                           <h3>Bring out your best in Tech Learning, work, and life</h3>
                           <p>Find the right plan for you</p>
                       </div>
                   </HeroContent>
              </Container>
        </HeroContainer>
    );
};

export default HeroSection;


const HeroContainer = styled.div`
    height: 600px;
    width: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`

const HeroContent = styled.div`
        height: calc( 100vh - 60px);
        display: flex;
        align-items: center;
        justify-content: right;

        & div {
             & h1 {
                 font-size: 42px;
             }
            & h3 {
                padding: 8px 0 4px 0;
            }
        }
`