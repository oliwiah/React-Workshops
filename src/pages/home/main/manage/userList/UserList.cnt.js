import { connect } from 'react-redux';

import { userIdsSelector, totalHypeSelector } from '../../../Home.duck';

import UserList from './UserList.cmp';

const mapStateToProps = (state, ownProps) => ({
    usersIds: userIdsSelector(state),
    totalHypePoints: totalHypeSelector(state),
});

export default connect(mapStateToProps)(UserList);