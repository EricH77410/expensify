
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

// Components
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import Header from '../components/Header'
import ExpeseDashboardPage from '../components/ExpenseDashboardPage'
import HelpPage from '../components/HelpPage'
import NotFound from '../components/NotFound'

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpeseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route component={NotFound}/>
        </Switch>
    </div>
    
    
</BrowserRouter>
)

export default AppRouter