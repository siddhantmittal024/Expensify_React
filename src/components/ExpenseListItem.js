// Export a stateless functional component
// description, amount, createdAt
import React from 'react';
import {Link} from 'react-router-dom';
import momemt from 'moment';
import numeral from 'numeral';

const ExpenseListItem  = ({description,id,amount,createdAt}) => (
        <Link className="list-item" to={`/edit/${id}`}>
            <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">{momemt(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <h3 className="list-item__data">{numeral(amount).format('$0,0.00')}</h3>
        </Link>   
);


export default ExpenseListItem; 