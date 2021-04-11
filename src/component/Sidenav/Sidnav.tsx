import React, { FC, useContext } from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Sidenav.module.css';
import {SidenavToggleContext} from '../../context/SidenavContext';
import SidenavContextType from '../../types/SidenavContextType';


const Sidenav: FC = () => {

    const { 
        isOpen,
        toggleSidenav 
    } = useContext(SidenavToggleContext) as SidenavContextType;

    const closeButtonHandler = () => {
        toggleSidenav(false);
    }

    return <div className={classes.sidenav} style={{ width: isOpen? '250px' : '0' }}>
        <button className={classes.closebtn} onClick={closeButtonHandler}>&times;</button>
        <NavLink 
                to='/' 
                className={classes.link}
                exact
                activeClassName={classes.active}
            >Films</NavLink>

            <NavLink 
                to='/people' 
                className={classes.link}
                activeClassName={classes.active}
            >People</NavLink>

            <NavLink 
                to='/starship' 
                className={classes.link}
                activeClassName={classes.active}
            >Planets</NavLink>

            <NavLink 
                to='/planets' 
                className={classes.link}
                activeClassName={classes.active}
            >Starships</NavLink>
    </div>
}

export default Sidenav;