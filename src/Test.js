import React, { useEffect, useState } from 'react'

const Test = () => {
    const [count, setCount] = useState(0)
    console.log('🚀 ~ file: Test.js:5 ~ Test ~ count', count)

    useEffect(() => {
        console.log('run-effect')
        setCount((prev) => {
            console.log(prev)
            return prev + 1
        })
    }, [])

    return (
        <>
            <div>{count}</div>
            {console.log('re-render')}
        </>
    )
}

export default Test
