import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomerActions';

export default class HomeContainer extends Component {
    constructor() {
        super();
        this.renderHomeButton = this.renderHomeButton.bind(this);
    }

    renderHomeButton() {
        this.props.history.push('/customers');
    }

    render()     {
        const body = (
            <div>
                <span>This is the HomePage</span>
                <CustomerActions>
                    <Button bsStyle="primary" onClick={this.renderHomeButton}> Customer List </Button>
                </CustomerActions>
            </div>
        )

        return <AppFrame header={'Home'} body={body}/>
    }
};
