import React from 'react';

import {
    CreateContainer,
    ActionContainer,
    Button,
    Input
} from './Create.styles';

const Create = (props) => (
    <CreateContainer>
        <ActionContainer>
            <Input 
                placeholder="login"
                value={props.login}
                onChange={props.setLogin}/>
            <Button onClick={props.addUser}>Add User</Button>
        </ActionContainer>
    </CreateContainer>
);

export default Create;