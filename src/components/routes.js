import React from 'react';
// REACT-ROUTER
import { Route, Switch} from 'react-router-dom';



import Home from './pages/Home'
import Contact from "./pages/Contact";

import {Header} from './layout/Header';



const Routes = (
    <div>
        <Header/>

  <Switch>



      <Route path='/'  exact={true} component={Home} />
      <Route path='/Contact'  component={Contact}/>


  </Switch>



    </div>
);


export default Routes;

