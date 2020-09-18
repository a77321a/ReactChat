import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar, Menu, Icon } from 'antd-mobile'
import { getMenu } from './api/api'
import { Redirect, withRouter } from 'react-router'

import { SET_MENU } from '../store/actionCreators'
@connect((state) => ({
  isLogin: state.auth.isLogin,
  menu: state.menu.menu,
}))
class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    const { dispatch } = this.props
    if (this.props.menu.length == 0) {
      getMenu().then((res) => {
        dispatch(SET_MENU(res.rows))
      })
    }
  }

  render() {
    return (
      <>
        <NavBar
          style={{ position: 'sticky', top: 0, zIndex: 9 }}
          mode="dark"
          icon={<Icon type="ellipsis" />}
        >
          管理后台
        </NavBar>
        {this.props.children}
      </>
    )
  }
}
export default Layout
