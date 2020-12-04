import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import {Provider} from 'react-redux';
import numeral from 'numeral';
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from './store/configureStore';;
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

numeral.register('locale', 'in', {
	delimiters: {
		thousands: ',',
		decimal: '.',
	},
	abbreviations: {
		thousand: 'k',
		million: 'm',
		billion: 'b',
		trillion: 't',
	},
	currency: {
		symbol: '₹',
	},
});

numeral.locale('in');

const jsx = (
    <Provider store ={store}>
       <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
