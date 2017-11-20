import { connect } from 'react-redux';

import User from './User.cmp';

const mapStateToProps = (state, ownProps) => ({
    
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteUser: () => {
        // TODO
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
