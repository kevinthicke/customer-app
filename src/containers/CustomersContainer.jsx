import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomerActions from '../components/CustomerActions';

const aCustomer = [{
    name: 'Carl Johnson',
    dni: '32143256K',
    email: 'carljohnson@gmail.com'
},
{
    name: 'Rychard Feymann',
    dni: '43257921G',
    email: 'rychardfeymann@gmail.com'
}]


class CustomersContainer extends Component {
    render() {
        const body = (
            <div>
                <CustomerList customerList={aCustomer}/>
                <CustomerActions>
                    <Button bsStyle="success">New Customer</Button>
                </CustomerActions>
            </div>
        )
        return <AppFrame header={'Customer List'} body={body}/>
    }
}

export default CustomersContainer;