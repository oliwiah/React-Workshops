import React from 'react';

import { UserContainer } from './User.styles';

const User = props => (
    <UserContainer>
        {props.user.login}
        <button onClick={props.deleteUser}>Delete</button>
    </UserContainer>
);

export default User;
