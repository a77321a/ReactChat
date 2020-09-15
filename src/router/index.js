/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-14 17:00:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-15 14:09:49
 */
import React from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import AnimatedRouter from 'react-animated-router'
import 'react-animated-router/animate.css'
import store from '../store/index'
import { Provider, connect } from 'react-redux'

import App from '../App'
import Layout from '../views/Layout.jsx'

import Home from '../views/home/Home.jsx'
import Login from '../views/login/Login.jsx'



const BasicRoute = (prop) => {
  const AppRouter = (
    <App>
      <Switch>
        <Route title="登录" path="/login" component={Login}></Route>
        <Layout>
          <Route title="首页" path="/home" component={Home}></Route>
        </Layout>
      </Switch>
    </App>
  )
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route render={(props) => {
            console.log(props)
            return AppRouter
          }}></Route>
        </Switch>
      </Router>
    </Provider>
  )
}


export default BasicRoute
