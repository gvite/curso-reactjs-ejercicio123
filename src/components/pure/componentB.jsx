import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ComponentB = (props) => {
    const [isConected, setconnected] = useState(props.contact.connected);
    const changeConected = () => {
        setconnected(!isConected);
    }
    return (
        <div>
            <h1>Hola {props.contact.name} {props.contact.firstname}</h1>
            <p>Email: <span>{props.contact.email}</span></p>
            <p>Estado: <span>{isConected ? 'En línea' : 'No Disponible'}</span></p>
            <button onClick={changeConected}>{isConected ? 'Desconectar' : 'Conectar'}</button>
        </div>
    );
};


ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};


export default ComponentB;
