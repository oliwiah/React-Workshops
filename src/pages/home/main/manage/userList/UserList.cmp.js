import React from 'react';

import { UserListContainer } from './UserList.styles';

import User from './user/User.cnt';

const UserList = props => (
    <UserListContainer>
        <h1>Total Hype Points: { props.totalHypePoints }</h1>
        {
            props.users.map(usr => <User key={usr.id} user={usr} />)
        }
    </UserListContainer>
);

export default UserList;
