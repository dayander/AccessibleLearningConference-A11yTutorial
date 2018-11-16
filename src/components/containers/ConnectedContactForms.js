import { connect } from 'react-redux'
import {ContactForms} from "../layout/ContactForms";
import {HeadingToggleButton} from "../layout/HeadingToggleButton";






const mapStateToProps = state => ({

    filter: state.SwitchSkiA11y
});

const ConnectedContactForms = connect(mapStateToProps)(ContactForms);

export default ConnectedContactForms;