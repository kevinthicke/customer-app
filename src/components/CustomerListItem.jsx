import React from 'react';
import { Link } from 'react-router-dom';
import { Well, Button } from 'react-bootstrap';

const style = {
    Well: {
        display: 'grid',
        gridTemplateColumns: '7fr 1fr 1fr',
        gridGap: '5px'
    },  
    button: {
        fontSize: '14pt'
    },
    name: {
        fontSize: '14pt',
        textAlign: 'left'
    }
}

const CustomerListItem = ({ name, dni, primaryButton, secondaryButton, urlPath }) => {
    return (
        <Well style={style.Well} bsSize="small">
            <Link to={`${urlPath}/${dni}`}>
                <Button style={style.name} bsStyle="link">{ name }</Button>
            </Link>
            <Link to={`${urlPath}/${dni}/${primaryButton}`}>
                <Button style={style.button} bsStyle="primary">{ primaryButton }</Button>
            </Link>
            <Link to={`${urlPath}/${dni}/${secondaryButton}`}>
                <Button style={style.button} bsStyle="danger">{ secondaryButton }</Button>
            </Link>
            
        </Well>
    );
};

export default CustomerListItem;