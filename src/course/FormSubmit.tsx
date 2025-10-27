import React from 'react'

interface Props {
    
}

const FormSubmit = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormSubmit
