import React, {FC} from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Header from './component/Header/Header';
import Modal from './component/Modal/Modal';
import Sidenav from './component/Sidenav/Sidnav';
import Wrapper from './component/Wrapper/Wrapper';

import Routes from './Routes/Routes';

import TaggleSidenavContext from './context/SidenavContext';

const App: FC = () => {
  return (
    <div>
      <TaggleSidenavContext>
        <Router>  
            <Modal />
            <Sidenav />
            <Header />
            <Wrapper >
                <Routes />
            </Wrapper>
          </Router>
      </ TaggleSidenavContext>
    </div>
  );
}

export default App;
