import React from 'react';
import MainNav from './mainNav';
import {FilterButtonHolder} from './FilterButtonHolder';
import {InstructionsHeader} from "./InstructionsHeader";
import VisibleInstructionsHeader from '../containers/VisibleInstructionsHeader';


export const Header = () => {



  return(
      <div id={'top-holder'} className={'fixed-top'}>
          <VisibleInstructionsHeader/>
          <FilterButtonHolder/>
          <MainNav />
      </div>
  )
};