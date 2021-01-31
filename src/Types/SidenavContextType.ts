import React from 'react';


interface SidenavContextType {
    isOpen: boolean,
    toggleSidenav: React.Dispatch<React.SetStateAction<boolean>> 
}

export default SidenavContextType;