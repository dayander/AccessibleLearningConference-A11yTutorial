import React from 'react';
import {SkiHillHeading2, SkiHillHeading3} from "./SkiHillCard";
import {accessibilityFilters} from "../../stateControllers/actions/skiHillHeadingSwitcher";

export const SkiHillList = ({skiHills, filter}) => {

    if(filter === accessibilityFilters.SHOW_ACCESSIBLE){
        return(
            <div>
                {skiHills.map((ski, i)  => <SkiHillHeading2 key={i} {...ski}/>)}

            </div>
        )
    }else if(filter === accessibilityFilters.SHOW_INACCESSIBLE){
        return(
        <div>
            {skiHills.map((ski, i)  => <SkiHillHeading3 key={i} {...ski}/>)}

        </div>
        )
    }


};