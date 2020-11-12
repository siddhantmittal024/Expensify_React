import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import {Provider} from 'react-redux';
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description:'Water Bill'}));
store.dispatch(addExpense({description:'Gas Bill'}));
store.dispatch(setTextFilter('water'));

setTimeout(()=>{
    store.dispatch(setTextFilter('rent'))
},3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);

const jsx = (
    <Provider store ={store}>
       <AppRouter/>
    </Provider>
);

console.log(visibleExpenses);

ReactDOM.render(jsx, document.getElementById("app"));
