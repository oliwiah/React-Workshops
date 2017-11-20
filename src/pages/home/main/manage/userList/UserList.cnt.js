import { connect } from 'react-redux';

import { usersSelector, totalHypeSelector } from '../../../Home.duck';

import UserList from './UserList.cmp';

const mapStateToProps = (state, ownProps) => ({
    users: usersSelector(state),
    totalHypePoints: totalHypeSelector(state),
});

export default connect(mapStateToProps)(UserList);