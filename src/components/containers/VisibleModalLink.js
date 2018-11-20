import { connect } from 'react-redux'
import {setModalFilter} from "../../stateControllers/actions/ModalActions";
import {ModalLink} from '../layout/ModalLink';
import {modalFilters} from "../../stateControllers/actions/ModalActions";


const mapStateToProps = state => (

    {
        filter: state.OpenAndCloseModal
    });

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setModalFilter(modalFilters.MODAL_OPENED, ownProps))
});

const VisibleModalLink = connect(null,mapDispatchToProps)(ModalLink);

export default VisibleModalLink;
