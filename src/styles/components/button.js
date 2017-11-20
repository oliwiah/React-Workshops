import styled from 'styled-components';

import * as colors from '../variables/colors';

const Button = styled.button`
    -webkit-appearance: none;
	
	height: 30px;
	padding: 0 1rem;

	background: none;

    border: none;
    border-radius: .5rem;

    background: ${ colors.cyan };
    color: ${ colors.whiteFontColor };

    &:hover {
        opacity: .8;
        box-shadow: 0 0 .3rem ${ colors.grey };
    }

    &:active {
        opacity: .7;
    }

    &:focus {
        outline: none;
    }
`;

export default Button;