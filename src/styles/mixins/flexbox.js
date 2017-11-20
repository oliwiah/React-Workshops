const flexbox = (direction, align, justify, wrap = 'nowrap', content = 'stretch') => `
    display: flex;
    flex-direction: ${ direction };
    align-items: ${ align };
    justify-content: ${ justify };	
    flex-wrap: ${ wrap };		
    align-content: ${ content};	
`;

export default flexbox;