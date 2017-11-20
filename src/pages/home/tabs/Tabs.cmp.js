import React from 'react';

import {
    TabsContainer,
    Tab,
} from './Tabs.styles';

const Tabs = props => (
    <TabsContainer>
        <Tab to="/create" exact activeClassName="selected">Create</Tab>
        <Tab to="/manage" exact activeClassName="selected">Manage</Tab>
    </TabsContainer>
);

export default Tabs;
