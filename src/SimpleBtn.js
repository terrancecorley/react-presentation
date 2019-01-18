import React from 'react';

function SimpleBtn(props) {
    const btnStyles = {
        color: props.color,
        backgroundColor: props.backgroundColor, 
        border: 'none',
        borderRadius: '5px',
        padding: '0.4em 0.6em',
        fontSize: '1.5rem',
        marginRight: '5px'
    };
    
    return (
        <button style={btnStyles}>{props.text}</button>
    )
}

export default SimpleBtn;





