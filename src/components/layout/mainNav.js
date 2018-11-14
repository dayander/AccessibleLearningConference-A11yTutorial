import React from 'react';
import {withRouter, Link } from "react-router-dom";



class MainNav extends React.Component {
    render(){
        return(

                <div>
            <nav>
                <Link to='/'>Home </Link>
                <Link to='/contact'> Contact</Link>

            </nav>

                </div>

        )
    }
}


export default withRouter(MainNav);
