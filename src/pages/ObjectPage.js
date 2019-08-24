import React from 'react';
import { Link } from 'react-router-dom';
import Object from '../components/Object';
import '../styles/cosmos.css';

const ObjectPage = (props) => {
    console.log(props);
    return (
        <>
            <div>Strona Obiektu
                 {/* {props.object.name} */}
            </div>
            <Object />
            <Link to="/cosmos">Powrót do spisu obiektów</Link>
        </>
    )
}

export default ObjectPage;