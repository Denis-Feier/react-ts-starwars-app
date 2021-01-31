import React, { FC, useContext } from 'react';

import classes from './Sidenav.module.css';
import {SidenavToggleContext} from '../../context/SidenavContext';
import SidenavContextType from '../../Types/SidenavContextType';


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
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
    </div>
}

export default Sidenav;