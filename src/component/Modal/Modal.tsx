import React, { FC, useContext } from 'react';

import classes from './Modal.module.css';
import {SidenavToggleContext} from '../../context/SidenavContext';
import SidenavContextType from '../../types/SidenavContextType';


const Modal: FC = (props) => {

    const { 
        isOpen,
        toggleSidenav 
    } = useContext(SidenavToggleContext) as SidenavContextType;
    
    const modalTapped = () => {
        toggleSidenav(false);
    }

    return <div className={classes.modal} style={{display: isOpen? 'block' : 'none' }} onClick={modalTapped} />
}

export default Modal;