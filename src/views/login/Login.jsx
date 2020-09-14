import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from './api'

@connect((state) => ({ isLogin: state.auth.isLogin }), { login })
class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {}
  handleLogin = () => {
    this.props.login({ username: 'admin', password: 123456 })
  }

  render() {
    return (
      <>
        <button onClick={this.handleLogin}>登录</button>
      </>
    )
  }
}
export default Login
