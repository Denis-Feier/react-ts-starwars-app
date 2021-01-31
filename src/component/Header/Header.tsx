import React, { FC, useContext } from 'react';

import {NavLink} from 'react-router-dom';

import classes from './Header.module.css';
import {SidenavToggleContext} from '../../context/SidenavContext';
import SidenavContextType from '../../Types/SidenavContextType';


const Header: FC = () => {

    const { 
        isOpen,
        toggleSidenav 
    } = useContext(SidenavToggleContext) as SidenavContextType;

    const stackButtonHandler = () => {
        toggleSidenav(!isOpen);
    }

    return <div>
        <div className={classes.topnav}>
            
            <div className={classes.stackButton} onClick={stackButtonHandler}>
                <div className={classes.bar1}></div>
                <div className={classes.bar2}></div>
                <div className={classes.bar3}></div>
            </div>
            
            
            <div className={classes.spacer}/>

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
    </div>
};

export default Header;