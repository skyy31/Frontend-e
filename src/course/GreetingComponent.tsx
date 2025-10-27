import { useState } from "react"

interface Props {
    
}

const GreetingComponent = () => {
    const [name, setName] = useState<string>("Jhon Doe");

    const handleClick = () => {
        setName("Jane Doe");
    }
    return (
        <>
            username: {name}
            <br />
            <button onClick={handleClick}>Change Name</button>
        </>
    )
}

export default GreetingComponent
