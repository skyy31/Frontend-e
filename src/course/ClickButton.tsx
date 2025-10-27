import type React from 'react';
import React from 'react'

interface Props {
    
}

const ClickButton = () => {
    const handleClick = (event :React.MouseEvent<HTMLButtonElement>) => {
        alert('Button clicked!');
        console.log(event.target);
    }
    return (
        <>
            <button onClick={handleClick}>Click Me!</button>
            <p>Click the button to see an alert.</p>
        </>
    )
}

export default ClickButton
export default <main></main>;
