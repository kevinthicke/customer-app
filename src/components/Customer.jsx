import React from 'react';
import { Well, Button } from 'react-bootstrap';

const Customer = ({ name, primaryButton, secondaryButton}) => {
    return (
        <Well>
            <span>{ name }</span>
            <Button bsStyle="primary">{ primaryButton }</Button>
            <Button bsStyle="danger">{ secondaryButton }</Button>
        </Well>
    );
};

export default Customer;