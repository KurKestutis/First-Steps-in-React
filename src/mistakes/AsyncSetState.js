import React, {useState, useEffect} from 'react'

export const AsyncSetState = () => {
    const [count, setCount] = useState(0)

    const sendCountValueToAPI = () => {
        setCount  (count +1)
        // console.log('Sending count value to API', count)
    }

    useEffect(() => {
        console.log('Sending count value to API', count)
    }, [count])

    return(
        <div>
            <button onClick={sendCountValueToAPI}>SEND to API</button>
            <p>Already sended to API - {count}</p>
        </div>)
}