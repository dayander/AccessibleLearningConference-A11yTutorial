import {accessibilityFilters} from "../actions/skiHillHeadingSwitcher";

const initialState = {
    isA11y: false
};


export const SwitchSkiA11y = (state = accessibilityFilters.SHOW_INACCESSIBLE, action)=>{

  switch (action.type){
      case "SET_ACCESSIBILITY_FILTER":
          return action.filter

      case "SHOW_ACCESSIBLE":
          console.log("not default")
          return {isA11y: !state.isA11y}

      default:
          console.log("default run", state)
          return state;

  }

};