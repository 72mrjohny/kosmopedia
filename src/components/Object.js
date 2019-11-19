import React from 'react';
import '../styles/cosmos.css';


const Object = (props) => {
    console.log(props);
    return (
        <div className="product">
            <h1>{props.id}</h1>
        </div>
    )
}

export default Object;