import React, { FC, useEffect, useState } from 'react'
import axios from 'axios';

import People from '../../types/api/People/People';
import environment from '../../util/config';
import PeopleTable from '../../component/PeopleTable/PeopleTable';
import PrevNextContoller from '../../component/PrevNextController/PrevNextContoller';

const ProplePage: FC = () => {

    const [people, setPeople] = useState<People>();

    useEffect(() => {
        getPeople()
    }, []);

    const getPeople = (path = environment.baseUrl + 'people') => {
        axios.get<People>(path).then(response => {
            setPeople(response.data)
            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const getPeopleHO = (path: string) => {
        return () => {
            getPeople(path)
        }
    }

    return <div>
        <PeopleTable people={people}/>
        <PrevNextContoller 
            next={!!people?.next ? getPeopleHO(people.next) : undefined } 
            prev={!!people?.previous ? getPeopleHO(people.previous) : undefined } 
        />
    </div>

}


export default ProplePage;