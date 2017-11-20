import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MainContainer } from './Main.styles';

import Create from './create/Create.cnt';
import Manage from './manage/Manage.cmp';

const Main = props => (
    <MainContainer>
        <Switch>
            <Route path="/create" exact component={Create} />
            <Route path="/manage" exact component={Manage} />
            <Redirect to='/create' />
        </Switch>
    </MainContainer>
);

export default Main;
