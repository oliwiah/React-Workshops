import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';

import { getUsers } from './Home.duck';

import Home from './Home.cmp';

const mapStateToProps = (state, ownProps) => ({
    
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getUsers: () => dispatch(getUsers()),
});

const EnhancedHome = compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            this.props.getUsers();
        }
    })
)(Home);

export default EnhancedHome;
