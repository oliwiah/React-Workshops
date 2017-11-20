import { connect } from 'react-redux';

import { addUser, setLogin } from './Create.duck';

import Create from './Create.cmp';

const mapStateToProps = (state, ownProps) => ({
    login: 'TODO',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setLogin: (ev) => {
        // TODO
    },
    addUser: () => {
        // TODO
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);