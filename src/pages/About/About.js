import React from 'react';
import styled from 'styled-components';
import AboutImg from '../../assets/pexels-corentin-detry-4491606.jpg';
import { Container } from '../../styles/Container.styles';
const About = () => {
    return (
        <AboutContainer style={{backgroundImage: `url(${AboutImg})`}}>
           <Container>
               <div style={{display:'flex', alignItems:'center', height: '450px', color: "white"}}>
                    <div>
                        <h1>About Us</h1>
                        <h3>A brief history about our company</h3>
                    </div>
               </div>
           </Container>
        </AboutContainer>
    );
};

export default About;


const AboutContainer = styled.div`
    height: 450px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`