import React, { 
    FC, 
    useState, 
    createContext,
    ReactNode
} from 'react';

import SidenavContextType from '../types/SidenavContextType';

interface SidenavContextProps {
    children: ReactNode
}

export const SidenavToggleContext = createContext<SidenavContextType | null>(null);

const SidenavContextProvider: FC<SidenavContextProps> = (props) => {
    
    const [isOpen, toggleSidenav] = useState<boolean>(false)
    
    return <div>
        <SidenavToggleContext.Provider value={{isOpen, toggleSidenav}}>
            {props.children}
        </SidenavToggleContext.Provider>
    </div>
}

export default SidenavContextProvider;