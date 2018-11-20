import {modalFilters} from "../actions/ModalActions";
import {accessibilityFilters} from "../actions/skiHillHeadingSwitcher";
import SkiHillData from "../../data/SkiHillData";


const initialState = SkiHillData;


export const OpenAndCloseModal = (state = initialState, action)=>{

    switch (action.type){
        case "SET_MODAL_FILTER":
            console.log(action);
            const updatedItems = state.map(item => {
                console.log(item.name, action.skiHill.name);
                if(item.name == action.skiHill.name){
                    item.modalOpen = action.filter;

                    return { ...item}
                }
                return item
            })
            return updatedItems
        default:
            return state;

    }

};