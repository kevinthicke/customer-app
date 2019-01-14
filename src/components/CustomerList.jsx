import React from 'react';
import CustomerListItem from './CustomerListItem';

const CustomerList = ({ customerList, urlPath }) => {
    return customerList.map(
        customer => <CustomerListItem key={customer.dni}
                                      name={customer.name} 
                                      dni={customer.dni}
                                      primaryButton={'Edit'} 
                                      secondaryButton={'Delete'}
                                      urlPath={urlPath}/>);
};

export default CustomerList;