import React from 'react'

interface Props {
    
}

const TextInput = () => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('input : ', event.target.value);
    };
    return (
        <>
            <input type="text" onChange={handleChange}/>
        </>
    )
}

export default TextInput
