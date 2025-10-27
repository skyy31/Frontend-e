import { useState } from 'react'

type Props = {
    isLoggedIn: boolean;
}

const TernaryOperator = ({ isLoggedIn }: Props) => {
    return (
        <div className={"w3-container"} >
            <h2>Ternary Operator Example</h2>
            {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
        </div>
    )
}

export default TernaryOperator
