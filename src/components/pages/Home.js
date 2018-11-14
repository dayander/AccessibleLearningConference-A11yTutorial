import React from 'react';
import {PageTitle} from '../a11y/PageTitle';
import {PageFocus} from "../a11y/PageFocus";
import SkiHillData from '../../data/SkiHillData'
import VisibleSkiHillList from "../containers/VisibleSkiHillList";

import {FilterButtonHolder} from '../layout/FilterButtonHolder';
import ConnectedHeadingLevelOne from "../containers/connectedHeadingLevelOne";

class Home extends React.Component{
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        PageTitle("Greater Twin Cities Ski Hills Home");


        // Set focus to the content container
        PageFocus();




    }



    render(){



        return(
            <main>
            <div>
                <FilterButtonHolder  />
                <ConnectedHeadingLevelOne>
                    Twin Cities Ski Areas
                </ConnectedHeadingLevelOne>

                <VisibleSkiHillList skiHills={SkiHillData} />


            </div>
            </main>



        )
    }

}







export default Home;