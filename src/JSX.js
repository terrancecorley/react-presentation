import React from 'react';
import styled from 'styled-components';

export default function JSX() {
    return (
        <Image src="./src/images/jsx-example.png" alt="jsx example" />
    )
}

const Image = styled.img`
    width: 700px;
`;
