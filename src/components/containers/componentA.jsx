import React from 'react';
import { Contact } from '../../models/contact.class';
import ComponentB from '../pure/componentB';

const ComponentA = () => {
    const contact = new Contact({name : 'Gerardo', firstname: 'Flores', email: 'asdasd@gmail.com',connected: true});
    return (
        <ComponentB contact={contact}></ComponentB>
    );
}

export default ComponentA;
