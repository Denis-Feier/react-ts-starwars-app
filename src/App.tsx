import React, {FC} from 'react';
import './App.css';

import Header from './component/Header/Header';
import Modal from './component/Modal/Modal';
import Sidenav from './component/Sidenav/Sidnav';

import TaggleSidenavContext from './context/SidenavContext';

const App: FC = () => {
  return (
    <div>
      <TaggleSidenavContext>
        <Modal />
        <Sidenav />
        <Header />
      </ TaggleSidenavContext>
    </div>
  );
}

export default App;
