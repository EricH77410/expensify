import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

// Router
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import './firebase/firebase';

// Components

// Style
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const state = store.getState()

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses())
    .then(()=>{
        ReactDOM.render(jsx, document.getElementById('app'));
    })


