import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Logout from './containers/Auth/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout')
});

const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders')
});

const asyncVideo = asyncComponent(() => {
  return import('./components/Video/Video')
});

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth')
});

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render() {
    let routes = (
      <Switch>
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/auth' component={asyncAuth} />
        <Route path='/video' component={asyncVideo} />  
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/' exact component={BurgerBuilder} />
          <Route path='/checkout' component={asyncCheckout} />
          <Route path='/orders' component={asyncOrders} />  
          <Route path='/video' component={asyncVideo} />     
          <Route path='/auth' component={asyncAuth} />         
          <Route path='/logout' component={Logout} />
          <Redirect to="/" />
        </Switch>
        );
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
