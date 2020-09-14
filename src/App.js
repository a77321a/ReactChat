/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-08 10:20:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-14 17:49:43
 */
import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
@connect(
  state => ({ isLogin: state.auth.isLogin }),
)
class App extends React.Component {
  render () {
    return (
      <div className="App">
        {this.props.isLogin ? null : <Redirect to='/login'></Redirect>}
        {this.props.children}
      </div>
    );
  }
}


export default App;
