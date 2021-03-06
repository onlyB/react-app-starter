import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { LoginForm } from 'components/Login';
import { login, logout } from 'actions/auth';

const Login = ({ auth, doLogin, doLogout }) => (
  <div style={{ width: '400px', margin: '0 auto 40px' }}>
    <LoginForm onLogin={doLogin} onLogout={doLogout} {...auth} />
  </div>
);

Login.propTypes = {
  doLogin: PropTypes.func.isRequired,
  doLogout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = dispatch => ({
  doLogin: data => dispatch(login(data)),
  doLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
