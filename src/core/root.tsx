import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from 'core';
import Home from 'modules/home';
import Infos from 'modules/infos';

interface RootProps {
  store: Store<any>;
}

const Root: React.SFC<RootProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />

          {/* Information routes */}
          <Route path="/infos" component={Infos} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
