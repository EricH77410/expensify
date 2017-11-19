import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

// Router
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import './firebase/firebase';

// Components

// Style
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({
    description: 'Water bill',
    amount: 10000,
    note: 'Veolia',
    createdAt: 8000
}))

store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 2000,
    note: 'EDF GDF',
    createdAt: 2
}))

store.dispatch(addExpense({
    description: 'Courses',
    amount: 20000,
    note: 'Carrefour',
    createdAt: 3
}))

store.dispatch(addExpense({
    description: 'Essence',
    amount: 4700,
    note: 'Inter marché',
    createdAt: 5
}))

//const state = store.getState()

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
