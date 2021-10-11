import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
    return (
        <NotFoundContainer>
            <div>
                <h1>404!</h1>
                <h2>Page Not Found!!</h2>
            </div>
        </NotFoundContainer>
    );
};

export default NotFound;

const NotFoundContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: red;
`