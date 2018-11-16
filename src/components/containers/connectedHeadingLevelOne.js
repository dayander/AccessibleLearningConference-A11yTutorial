import { connect } from 'react-redux'
import HeadingLevelOne from "../layout/HeadingLevelOne";
import {accessibilityFilters} from "../../stateControllers/actions/skiHillHeadingSwitcher";


const switchHeadingA11y = (skiHillHeadings, filter) =>{
    switch (filter){
        case accessibilityFilters.SHOW_INACCESSIBLE:
            return [skiHillHeadings]
        case accessibilityFilters.SHOW_ACCESSIBLE:
            return skiHillHeadings
        default:

            return skiHillHeadings
    }
};



const mapStateToProps = state => ({

        filter: state.SwitchSkiA11y
});



export default connect(
    mapStateToProps
)(HeadingLevelOne)