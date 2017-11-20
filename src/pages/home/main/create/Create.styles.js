import styled from 'styled-components';

import flexbox from 'styles/mixins/flexbox';
import shadow from 'styles/mixins/shadow';
import * as dimensions from 'styles/variables/dimensions';

import BaseComponents from 'styles/components';

export const CreateContainer = styled.div`
    ${ flexbox('column','center','center') }

    width: 100%;
    height: calc(100vh - ${ dimensions.navHeight } - ${ dimensions.tabsHeight });
`;

export const ActionContainer = styled.div`
    ${ flexbox('column','center','center') }
    ${ shadow }

    width: 400px;
    height: 200px;
`;

export const Button = BaseComponents.Button.extend``;

export const Input = BaseComponents.Input.extend``;