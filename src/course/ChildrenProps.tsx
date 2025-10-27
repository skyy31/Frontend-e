import React from 'react'

interface Props {
    children: React.ReactNode;
}

const ChildrenProps = ({ children }: Props) => {
    return (
        <>
        <h1>Children props example</h1>
        <p>{children}</p>
        </>
    )
}

export default ChildrenProps
