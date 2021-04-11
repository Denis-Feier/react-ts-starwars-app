import React, {FC} from 'react';

import People from '../../types/api/People/People';
import classes from './PeopleTable.module.css';
import Person from './Person/Person';

interface PeopleTableProps {
    people?: People;
}

const PeopleTable: FC<PeopleTableProps> = (props) => {
    return <div>
        <ul className={classes['people_list']}>
            {props.people?.results.map(person => {
                return <Person key={person.uid} personUrl={person.url} />;
            })}
        </ul>
    </div>
}

export default PeopleTable;