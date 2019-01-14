import React from 'react';
import { Grid } from 'react-bootstrap';

const AppFrameStyle = {
    display: 'grid',
    gridTemplateRows: '1fr 8fr',
    gridGap:'20px'
}

const AppFrame = ({ header, body }) => {
    return (
        <Grid style={AppFrameStyle}>
            <h1>{ header }</h1>
            <div>{ body }</div>
        </Grid>
    );
};

export default AppFrame;