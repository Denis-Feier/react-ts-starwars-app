import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';

import PersonDetails from '../../../types/api/People/PersonDetails';
import classes from './Person.module.css';

interface PersonProps {
    personUrl: string;
}

interface PersonData {
    message: string;
    result: {
        properties: PersonDetails;
    }
}

const Person: FC<PersonProps> = (props) => {

    const [person, setPerson] = useState<PersonData>()

    useEffect(() => {
        axios.get(props.personUrl).then((response) => {
            setPerson(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }, [props.personUrl])

    return !!person ? <HasPersonData message={person.message} result={person.result}/> : null
}

const HasPersonData: FC<PersonData> = (props) => {
    return <li className={classes.person}>
        <div>
            {props.result.properties.name} 
        </div>
        <div>
            {props.result.properties.eye_color}
        </div>
    </li>
}


export default React.memo(Person);