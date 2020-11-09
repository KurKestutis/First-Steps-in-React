import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

//functional component
function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline



//In React inline styles are not specified as a string
// intead they are specified with an object whose key
// is the camel cased version of the style name and
// the value is usuall a string. 