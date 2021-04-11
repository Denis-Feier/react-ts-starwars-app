import React, { FC, useEffect, useState} from 'react'
import axios from 'axios';

import People from '../../types/api/People/People';
import environment from '../../util/config';
import PeopleTable from '../../component/PeopleTable/PeopleTable';

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

    return <div>
        <PeopleTable people={people}/>
    </div>

}

export default ProplePage;