import React from 'react';
import {SkiHillHeading2, SkiHillHeading3} from "./SkiHillCard";
import {accessibilityFilters} from "../../stateControllers/actions/skiHillHeadingSwitcher";

export const SkiHillList = ({skiHills, filter}) => {
    // isA11y = isA11y;
    // console.log(skiHills, isA11y);
    // if(isA11y === true)

    // var x = skiHills.map((hill, i) =>{
    //     <SkiHillHeading2 key={i} skiHill={hill}/>
    // })

    if(filter === accessibilityFilters.SHOW_ACCESSIBLE){
        return(
            <div>
                {skiHills.map((ski, i)  => <SkiHillHeading2 key={i} {...ski}/>)}
                {filter? "hey": "whats up"}
            </div>
        )
    }else if(filter === accessibilityFilters.SHOW_INACCESSIBLE){
        return(
        <div>
            {skiHills.map((ski, i)  => <SkiHillHeading3 key={i} {...ski}/>)}
            {filter? "hey": "whats up"}
        </div>
        )
    }



}