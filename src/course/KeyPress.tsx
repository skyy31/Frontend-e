import React from 'react'

interface Props {
    
}

const KeyPress = () => {
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log('Key pressed: ', event.key);
    }
    return (
        <div>
            <input type="text" onKeyPress={handleKeyPress} />
        </div>
    )
}

export default KeyPress;
