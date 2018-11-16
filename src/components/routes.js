import React from 'react';
// REACT-ROUTER
import { Route, Switch} from 'react-router-dom';



import Home from './pages/Home'
import Contact from "./pages/Contact";
import MainNav from './layout/mainNav';
import {FilterButtonHolder} from './layout/FilterButtonHolder';

const Routes = (
    <div>
        <FilterButtonHolder/>
        <MainNav/>
  <Switch>



      <Route path='/'  exact={true} component={Home} />
      <Route path='/Contact'  component={Contact}/>


  </Switch>
    </div>
);


export default Routes;

