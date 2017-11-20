import { connect } from 'react-redux';

import UserList from './UserList.cmp';

const mapStateToProps = (state, ownProps) => ({
    users: state.home.page.users,
});

export default connect(mapStateToProps)(UserList);