/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-08 10:20:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-11 18:17:30
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
class Test extends React.Component {
  render () {
    return <h2>测试</h2>
  }
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/yiying">一营</Link>
          </li>
          <li>
            <Link to="/erying">二营</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/:location" exact component={Test} />
        </Switch>

      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

//<Route path="/yiying" component={yiying} />
//<Route path="/erying" component={erying} />