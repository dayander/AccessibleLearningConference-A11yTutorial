import React from 'react';
import FilterLink from '../containers/FilterLink';
import {accessibilityFilters} from "../../stateControllers/actions/skiHillHeadingSwitcher";


export const FilterButtonHolder = () => (
    <div>
        <FilterLink filter={accessibilityFilters.SHOW_ACCESSIBLE}>
            Accessible
        </FilterLink>

        <FilterLink filter={accessibilityFilters.SHOW_INACCESSIBLE}>
           Not Accessible
        </FilterLink>
    </div>
)