import { connect } from 'react-redux'
import {ModalBaseReactModal} from "./ModalBaseReactModal";


const mapStateToProps = (state, ownProps) => {

    const skiHill = state.OpenAndCloseModal.find((x)=> x.name === ownProps.name);
    return(
        {
            filter: skiHill.modalOpen,
            skiHill: skiHill
        }
    )
};




const ConnectedModalReactModal = connect(mapStateToProps)(ModalBaseReactModal);


export default ConnectedModalReactModal;