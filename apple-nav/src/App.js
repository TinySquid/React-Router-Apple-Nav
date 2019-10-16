import React from 'react';
import { Route } from 'react-router-dom';

import NavWrapper from './components/NavWrapper';

// import { SubNav, MacNav, IpadNav, IPhoneNav, WatchNav, TVNav, MusicNav } from './components/subnav/';
import MacNav from './components/subnav/MacNav'
import IpadNav from './components/subnav/IpadNav'
import IPhoneNav from './components/subnav/IPhoneNav'
import WatchNav from './components/subnav/WatchNav'
import TVNav from './components/subnav/TVNav'
import MusicNav from './components/subnav/MusicNav'

import './App.css';

function App() {
  return (
    <div>
      <NavWrapper />

      <Route path="/mac" render={(routeProps) => <MacNav {...routeProps}></MacNav>} />
      <Route path="/ipad" render={(routeProps) => <IpadNav {...routeProps}></IpadNav>} />
      <Route path="/iphone" render={(routeProps) => <IPhoneNav {...routeProps}></IPhoneNav>} />
      <Route path="/watch" render={(routeProps) => <WatchNav {...routeProps} ></WatchNav>} />
      <Route path="/tv" render={(routeProps) => <TVNav {...routeProps}></TVNav>} />
      <Route path="/music" render={(routeProps) => <MusicNav {...routeProps}></MusicNav>} />

    </div>
  );
}

export default App;
