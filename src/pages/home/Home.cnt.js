import { connect } from 'react-redux';

import { getUsers } from './Home.duck';

import Home from './Home.cmp';

const mapStateToProps = (state, ownProps) => ({
    
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
