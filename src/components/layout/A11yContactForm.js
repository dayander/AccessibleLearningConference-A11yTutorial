import React from 'react';
import {NameInputAndLabel} from "./NameInputAndLabel";
import {MessageInputAndLabel} from "./MessageInputAndLabel";
import {SubmitContactButton} from "./SubmitContactButton";


export const A11yContactForm = (props) => {


    return(
        <form>
            <NameInputAndLabel/>
            <MessageInputAndLabel/>
            <SubmitContactButton />
        </form>
    )
};
