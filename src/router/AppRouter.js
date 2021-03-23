import React from 'react'
import {BrowserRouter,  Route, Switch} from 'react-router-dom'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpensePage'
import DashboardExpense from '../components/ExpenseDasbboardPage'
import Help from '../components/HelpPage'
import NotFound from '../components/NotFound'
import Header from '../components/Header'

const AppRouter = () =>{
    return(
     <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path="/addExpense" component={AddExpensePage} exact={true} />
          <Route path="/editExpense" component={EditExpensePage} exact={true}/>
          <Route path="/help" component={Help} exact={true} />
          <Route path="/" component={DashboardExpense} exact={true} />
          <Route component={NotFound} />
        </Switch>
      </div>
        
     </BrowserRouter>
    )
  }

  export default AppRouter;