import React, { FC, useContext } from 'react';

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

            <a className={classes.active}>Films</a>
            <a>People</a>
            <a>Planets</a>
            <a>Species</a>
            <a>Starships</a>
            <a>Vehicles</a>
            
        </div>
    </div>
};

export default Header;