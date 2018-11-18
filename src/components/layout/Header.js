import React from 'react';
import MainNav from './mainNav';
import {FilterButtonHolder} from './FilterButtonHolder';
import {InstructionsHeader} from "./InstructionsHeader";
import VisibleInstructionsHeader from '../containers/VisibleInstructionsHeader';


export const Header = () => {
  return(
      <div>
          <VisibleInstructionsHeader/>
          <FilterButtonHolder/>
          <MainNav />
      </div>
  )
};