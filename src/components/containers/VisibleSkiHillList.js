import { connect } from 'react-redux'
import {SkiHillList} from "../layout/SkiHillList";
import {accessibilityFilters} from "../../stateControllers/actions/skiHillHeadingSwitcher";


const switchHeadingA11y = (skiHillHeadings, filter) =>{
    console.log(skiHillHeadings, filter)
    switch (filter){
        case accessibilityFilters.SHOW_INACCESSIBLE:
            return [skiHillHeadings]
        case accessibilityFilters.SHOW_ACCESSIBLE:
            return skiHillHeadings
        default:
            console.log('state.SkiSwitch', filter)
            return [skiHillHeadings]

    }
}



const mapStateToProps = state => (

    {
        filter: state.SwitchSkiA11y
})



export default connect(
    mapStateToProps
)(SkiHillList)