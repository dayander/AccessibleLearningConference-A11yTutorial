import {combineReducers} from 'redux';
import {SwitchSkiA11y} from './skiHillHeadingReducer'
import {OpenAndCloseInstructions} from "./instructionsReducer";


export const a11ySwitcher = combineReducers({
    OpenAndCloseInstructions,
    SwitchSkiA11y

});
