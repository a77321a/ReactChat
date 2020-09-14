/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-14 17:00:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-14 17:47:30
 */
import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import AnimatedRouter from 'react-animated-router'
import 'react-animated-router/animate.css'
import store from '../store/index'
import { Provider, connect } from 'react-redux'

import App from '../App'
import Home from '../views/home/Home.jsx'
import Login from '../views/login/Login.jsx'



const BasicRoute = (props) => {
  const AppRouter = (
    <App>
      <Route title="首页" path="/home" component={Home}></Route>
    </App>
  )
  return (
    <Provider store={store}>
      <Router>
        <Route title="登录" path="/login" component={Login}></Route>
        <Route path="/" render={(props) => AppRouter}></Route>
      </Router>
    </Provider>
  )
}


export default BasicRoute
