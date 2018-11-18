import React from 'react';
import {instructionsFilters} from "../../stateControllers/actions/OpenAndCloseIntructionsHeader";
import CloseMessageButton from '../containers/CloseMessageLink';
import ShowMessageButton from '../containers/ShowMessageLink';


const InstructionsHeading =() =>{
  return <strong id={'instructions-heading'}> Welcome</strong>
};


const InstructionsParagraph = () => {
    return <p id={'instructions-paragraph'} > There are two verisons of this website. One is accessible and the other is not. Minneaplois Ski Hills is meant to be an instructional site. When the site loads the pages are not accessible. After this message ther will be buttons allowing you to toggle between the accessible and inaccessible verisons of the site.</p>
};

export const InstructionsHeader = ({filter}) =>{

    if(filter=== instructionsFilters.INSTRUCTIONS_OPEN){
        return(
            <div>
                <InstructionsHeading/>
                <InstructionsParagraph/>
                <CloseMessageButton >
                    Close
                </CloseMessageButton>

            </div>
        )

    }else if(filter === instructionsFilters.INSTRUCTIONS_CLOSED){
        return(
            <ShowMessageButton>
                Show Instructions
            </ShowMessageButton>
        )
    }

};