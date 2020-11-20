import { Switch, BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from "./ExpenseListFilters";
import React from "react";

const ExpenseDashboardPage = () => (
<div>
     <ExpenseListFilters/>
     <ConnectedExpenseList/>
    </div>
    );

export default ExpenseDashboardPage;
