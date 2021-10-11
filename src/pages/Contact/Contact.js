import React from 'react';
import styled from 'styled-components';
import AboutImg from '../../assets/pexels-corentin-detry-4491606.jpg';
import { Container } from '../../styles/Container.styles';

const Contact = () => {
    return (
        <ContactContainer style={{backgroundImage: `url(${AboutImg})`}}>
        <Container>
            <div style={{display:'flex', alignItems:'center', height: '450px', color: "white"}}>
                 <div>
                     <h1>Contact Us</h1>
                     <h3>Get in Touch with Us</h3>
                 </div>
            </div>
        </Container>
     </ContactContainer>
    );
};

export default Contact;

const ContactContainer = styled.div`
    height: 450px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`