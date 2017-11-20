import styled from 'styled-components';

import flexbox from 'styles/mixins/flexbox';
import shadow from 'styles/mixins/shadow';

export const UserContainer = styled.li`
    ${ flexbox('row','center','flex-start') }
    ${ shadow }

    margin: 1rem;
    padding: 0 0 0 1rem;
    height: 3rem;
`;
