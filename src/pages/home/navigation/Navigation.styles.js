import styled from 'styled-components';

import * as colors from 'styles/variables/colors';
import * as dimensions from 'styles/variables/dimensions';

import flexbox from 'styles/mixins/flexbox';

export const NavigationContainer = styled.nav`
    ${ flexbox('row','center','flex-start') }

    width: ${ dimensions.appWidth };
    height: ${ dimensions.navHeight };

    background: ${ colors.blue };
`;

export const NavTitle = styled.span`
    margin-left: 1rem;
    color: ${ colors.whiteFontColor };
`;
