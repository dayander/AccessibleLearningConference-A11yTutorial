import {accessibilityFilters} from "../actions/skiHillHeadingSwitcher";

const initialState = {
    isA11y: false
};


export const SwitchSkiA11y = (state = accessibilityFilters.SHOW_INACCESSIBLE, action)=>{

  switch (action.type){
      case "SET_ACCESSIBILITY_FILTER":
          return action.filter;

      case "SHOW_ACCESSIBLE":

          return {isA11y: !state.isA11y};

      default:

          return state;

  }

};