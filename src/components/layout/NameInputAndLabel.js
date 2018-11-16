import React from 'react';


export const NameInputAndLabel = (props) =>{


    return(
        <div>
            <label id={'name-label-a11y'} htmlFor={'name'}  >Name: </label>
            <input type={'text'} id={'name'} name={'name'} />
        </div>
    )
};