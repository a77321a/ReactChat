import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from './api'
import styled from 'styled-px2vw'
import { SET_USER_INFO } from '../../store/actionCreators'
import logo from './sm-logo.png'
import { Button, InputItem } from 'antd-mobile'

@connect((state) => ({ isLogin: state.auth.isLogin }))
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: 123456,
    }
  }
  componentDidMount() {}
  handleLogin = async () => {
    let user = await login()
    const { dispatch } = this.props
    dispatch(SET_USER_INFO(user))
    if (this.props.isLogin) {
      this.props.history.push('/home')
    }
  }

  render() {
    return (
      <LoginWrap>
        <img
          style={{
            height: '160px',
            width: '120px',
            margin: '40px auto',
            display: 'block',
          }}
          src={logo}
          alt=""
        />
        <InputItem
          type="phone"
          placeholder="请输入手机号"
          clear
          onChange={(v) => {
            this.setState({ username: v })
          }}
        ></InputItem>
        <InputItem
          type="password"
          placeholder="请输入密码"
          clear
          onChange={(v) => {
            this.setState({ password: v })
          }}
        ></InputItem>
        <Button
          onClick={this.handleLogin}
          style={{ marginTop: '30px' }}
          type="primary"
        >
          登录
        </Button>
      </LoginWrap>
    )
  }
}

const LoginWrap = styled.div`
  margin: 0 64px;
  line-height: 43px;
`

export default Login
