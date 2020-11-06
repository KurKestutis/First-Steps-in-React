import React from 'react'

const Hello = () => {
    // return(
    //     <div>
    //         <h1>HELLO</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Component WITHOUT JSX')
    )
}

export default Hello