import React from 'react';

import { ManageContainer } from './Manage.styles';

import UserList from './userList/UserList.cnt';

const Manage = (props) => (
    <ManageContainer>
        <UserList />
    </ManageContainer>
);

export default Manage;