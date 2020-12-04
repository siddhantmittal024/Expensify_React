// Export a stateless functional component
// description, amount, createdAt
import React from 'react';
import {Link} from 'react-router-dom';
import momemt from 'moment';
import numeral from 'numeral';

const ExpenseListItem  = ({description,id,amount,createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount).format('$0,0.00')}
             - 
            {momemt(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);


export default ExpenseListItem; 