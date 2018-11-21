import React from 'react';


export const MessageInputAndLabel = (props) =>{


    return(
        <div>
            <label id={'message-label-a11y'} htmlFor="message" >Message: </label>
            <textarea type={'text'} id={'message'} name={'message'} />
        </div>
    )
};