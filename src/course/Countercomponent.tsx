import { useState } from "react"

const Countercomponent = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => setCount (count + 1);
    const decrement = () => setCount (count - 1);
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default Countercomponent
