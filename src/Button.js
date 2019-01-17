import React from 'react';


function Button(props) {
    const styles = {
        color: props.color,
        backgroundColor: props.backgroundColor 
    };
    
    return (
        <button style={styles}>{props.text}</button>
    )
}
    

export default Button;