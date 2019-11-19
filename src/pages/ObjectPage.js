import React from 'react';
import { Link } from 'react-router-dom';
import Object from '../components/Object';
import '../styles/cosmos.css';

const ObjectPage = ({ match }) => {
    return (
        <>
            <div>Strona Obiektu
            </div>
            <Object id={match.params.id} />
            <Link to="/cosmos">Powrót do spisu obiektów</Link>
        </>
    )
}

export default ObjectPage;