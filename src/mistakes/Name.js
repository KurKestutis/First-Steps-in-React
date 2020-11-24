import React, { useState } from 'react';

export const Name = () => {
    const [name, setName] = useState ({
        fname: 'Clark',
        lname: 'Kent'
    })

    const changeName = () => {
        setName ({
            fname: "Third",
            lname: "Fourth"
        })
    }

    const clearNames = () => {
        setName ({
            fname: "",
            lname: ""
        })
    }

    return (
        <div style={{backgroundColor: "lightblue"}}>
            <p>
                Name is {name.fname} {name.lname}
            </p>
            <p>Set name to second name</p>
            <button onClick={changeName}>Set Name </button>            
            <button onClick={clearNames}>Clear Names</button>
        </div>
    )
};