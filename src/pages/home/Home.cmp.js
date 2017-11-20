import React from 'react';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../../app.store';

// components & containers
import Navigation from './navigation/Navigation.cmp';
import Tabs from './tabs/Tabs.cmp';
import Main from './main/Main.cmp';

// styles
import { HomeContainer } from './Home.styles';

const Home = props => (
  <ConnectedRouter history={history}>
    <HomeContainer>
      <Navigation />
      <Tabs />
      <Main />
    </HomeContainer>
  </ConnectedRouter>
);

export default Home;