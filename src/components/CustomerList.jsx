import React from 'react';
import Customer from './Customer';

const CustomerList = ({ customerList }) => {
    return customerList.map(
        customer => <Customer name={customer.name} primaryButton={'Edit'} secondaryButton={'Delete'}/>);
};

export default CustomerList;