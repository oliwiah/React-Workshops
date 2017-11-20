import React from 'react';

import { UserListContainer } from './UserList.styles';

import User from './user/User.cnt';

const UserList = props => (
    <UserListContainer>
        {
            props.users.map(usr => <User key={usr.id} user={usr} />)
        }
    </UserListContainer>
);

export default UserList;
