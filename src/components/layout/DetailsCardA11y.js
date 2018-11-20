import React from 'react';
import VisibleModalLink from '../containers/VisibleModalLink';
import ConnectedModalBaseReactModal from '../modal/ConnectedModalReactModal';


export const DetailsCardA11y = (props) => (
    <div>
        <h3>Details:</h3>
        <ul>
            <li>Vertical: {props.vertical}</li>
            <li><VisibleModalLink {...props} >See {props.name} Trail Map </VisibleModalLink> </li>
        </ul>
        <ConnectedModalBaseReactModal name={props.name}/>

    </div>
)