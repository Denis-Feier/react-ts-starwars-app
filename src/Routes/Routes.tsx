import React, { FC }from 'react';

import {
    Switch,
    Route
} from "react-router-dom";

import classes from './Routes.module.css';

import PlanetsPage from '../pages/PlanetsPage/PlanetsPage';
import PeoplePage from '../pages/PeoplePage/PeoplePage';
import StarshipsPage from '../pages/StarshipsPage/StarshipsPage';
import FilmesPage from '../pages/FilmsPage/FilmsPage';

const Routes: FC = () => {
    return <div className={classes.routes}> 
        <Switch>
            <Route path={'/'} exact component={FilmesPage} />
            <Route path={'/people'} component={PeoplePage} />
            <Route path={'/starship'} component={StarshipsPage} />
            <Route path={'/planets'} component={PlanetsPage} />
        </Switch>
    </div>
}

export default Routes;