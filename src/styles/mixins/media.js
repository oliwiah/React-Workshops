import { css } from 'styled-components';

const sizes = {
    minDesktop: 992,
    minTablet: 768,
    minPhone: 360,
};

// Iterate through the sizes and create a media template
const media = {
    desktop: (...args) => css`
        @media screen and (min-width: ${ sizes.minDesktop }px) {
            ${css(...args)}
        }
    `,
    tablet: (...args) => css`
        @media screen and (min-width: ${ sizes.minTablet }px) and (max-width: ${ sizes.minDesktop - 1 }px) {
            ${css(...args)}
        }
    `,
    phone: (...args) => css`
        @media screen and (min-width: ${ sizes.minPhone }px) and (max-width: ${ sizes.minTablet - 1 }px){
            ${css(...args)}
        }
    `
};

export default media;
