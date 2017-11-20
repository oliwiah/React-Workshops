import { connect } from 'react-redux';

import { addUser, setLogin } from './Create.duck';

import Create from './Create.cmp';

const mapStateToProps = (state, ownProps) => ({
    login: state.home.tabs.create.login,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setLogin: (ev) => dispatch(setLogin(ev.target.value)),
    addUser: () => dispatch(addUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);