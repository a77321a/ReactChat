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
        console.log(res)
        dispatch(SET_MENU(res.rows))
      })
    }
  }

  render() {
    return (
      <>
        <NavBar mode="dark" icon={<Icon type="ellipsis" />}>
          NavBar
        </NavBar>
        {this.props.children}
        {/* <Menu
          className="foo-menu"
          data={initData}
          value={['1', '3']}
          onChange={this.onChange}
          height={document.documentElement.clientHeight * 0.6}
        /> */}
      </>
    )
  }
}
export default Layout
