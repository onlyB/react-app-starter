import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Footer } from 'components/Layout';
import Home from './Home';
import Post from './Post';
import Login from './Login';

import './App.css';

const App = ({ auth }) => (

  <div className="container">
    <div className="header clearfix">
      <Nav {...auth} />
      <h3 className="text-muted">React App Starter</h3>
    </div>

    <div className="main-content">

      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Post} />
      <Route exact path="/login" component={Login} />

    </div>

    <Footer />

  </div>
);

App.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });

// This module is connected with redux, so we need withRouter() decorator for route working
export default withRouter(connect(mapStateToProps)(App));
