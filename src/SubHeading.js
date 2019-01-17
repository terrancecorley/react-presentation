import React from 'react'
import styled from 'styled-components';

export default function SubHeading(props) {
    return (
        <Title>{props.subHeading}</Title>
    )
}

const Title = styled.h2`
    font-size: 98px;
    margin: 0;
    margin-bottom: 25px;
`;