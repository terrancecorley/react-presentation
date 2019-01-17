import React from 'react'
import styled from 'styled-components';

export default function Heading(props) {
    return (
        <Title>{props.heading}</Title>
    )
}

const Title = styled.h1`
    font-size: 148px;
    margin-bottom: 0;
`;