import { connect } from 'react-redux';
import { deleteUser } from '../../Manage.duck';
import { usersByIdSelector } from '../../../../Home.duck';

import User from './User.cmp';

const mapStateToProps = (state, ownProps) => ({
    user: usersByIdSelector(state)[ownProps.userId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteUser: () => dispatch(deleteUser(ownProps.user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
