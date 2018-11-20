import React from 'react';


export const ModalLink = ({children, onClick}) =>{

    return(
        <button onClick={onClick.bind(this)}>
            {children}
        </button>
    )
};