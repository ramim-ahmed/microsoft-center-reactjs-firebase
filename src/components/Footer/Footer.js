import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/Container.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <p style={{textAlign:'center'}}>All rights are reserved by RamimDevs</p>
            </Container>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.div`
        background-color: black;
        color: white;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
`