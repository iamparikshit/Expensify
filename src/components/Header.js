import React from 'react'
import {NavLink} from 'react-router-dom'
const Header= () =>{
    return(
      <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active"> Dashboard</NavLink>
      <NavLink to="/addExpense" activeClassName="is-active"> Add</NavLink>
      <NavLink to="/editExpense" activeClassName="is-active"> Edit</NavLink>
      <NavLink to="/help" activeClassName="is-active"> Help</NavLink>
      </div>
    )
  }

  export default Header;