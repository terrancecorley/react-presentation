import React from 'react'
import styled, { keyframes } from 'styled-components';
import Heading from './Heading';

export default function ReactLogo(props) {
    return (
        <div>
            <Heading heading="React.js" />
            <Logo src="./src/images/react-logo.png"/>
        </div>
    )
}

const rotateLogo = keyframes`
    from { 
        transform: rotate(0deg);
    }

    to { 
        transform: rotate(360deg); 
    }
`;

const Logo = styled.img`
    width: 350px;
    animation: ${rotateLogo} infinite 20s linear; 
`;

