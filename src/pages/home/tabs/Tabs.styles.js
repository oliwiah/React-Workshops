import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import * as colors from 'styles/variables/colors';
import * as dimensions from 'styles/variables/dimensions';

import flexbox from 'styles/mixins/flexbox';

export const TabsContainer = styled.ul`
    ${ flexbox('row','center','flex-start') }

    width: calc(${ dimensions.appWidth } - 1rem);
    height: ${ dimensions.tabsHeight };

    padding-left: 1rem;

    background: ${ colors.cyan };
    box-shadow: 0 2px 2px ${ colors.grey };
`;

export const Tab = styled(NavLink)`
    ${ flexbox('column','center','center') }

    height: calc(2rem - 6px);
    padding: 0 1rem;

    color: ${ colors.whiteFontColor };

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    cursor: pointer;
    text-decoration: none;

    &.selected {
        border-bottom: 3px solid ${ colors.white }; 
    }
`;
