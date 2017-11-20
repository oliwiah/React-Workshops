import { connect } from 'react-redux';

import UserList from './UserList.cmp';

const mapStateToProps = (state, ownProps) => ({
    users: 'TODO',
});

export default connect(mapStateToProps)(UserList);