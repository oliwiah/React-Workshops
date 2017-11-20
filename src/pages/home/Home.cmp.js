import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// components & containers
import Navigation from './navigation/Navigation.cmp';
import Tabs from './tabs/Tabs.cmp';
import Main from './main/Main.cmp';

// styles
import { HomeContainer } from './Home.styles';

const Home = props => (
  <BrowserRouter>
    <HomeContainer>
      <Navigation />
      <Tabs />
      <Main />
    </HomeContainer>
  </BrowserRouter>
);

export default Home;