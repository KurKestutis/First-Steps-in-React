import React from 'react'

function Kitty(props){

    return (
        <div className="Comment">
            <div className="UserInfo">
                <img
                    className="Avatar"
                    src={props.autor.avatarUrl}
                    alt={props.autor.name}
                    />
                    <div className="UserInfo-name">
                        {props.autor.name}
                    </div>
            </div>

            <div className="Comment-text">
                        {FormData(props.date)}
            </div>
        </div>
        
    )
}



export default Kitty

// https://reactjs.org/docs/components-and-props.html
// https://codepen.io/pen?editors=0010

