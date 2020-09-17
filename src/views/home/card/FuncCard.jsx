import React, { Component } from 'react'
import { Grid } from 'antd-mobile'

export default class FuncCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      funcList: [
        {
          icon: require('./images/icon-func-course.png'),
          text: '课程管理',
          routeName: '/course',
        },
        {
          icon: require('./images/icon-func-grid.png'),
          text: '首页楼层设置',
          routeName: '/recommend',
        },
        {
          icon: require('./images/icon-func-message.png'),
          text: '提现管理',
          routeName: '/cash-management',
        },
        {
          icon: require('./images/icon-func-order.png'),
          text: '订单管理',
          routeName: '/order-course',
        },
        {
          icon: require('./images/icon-func-banner.png'),
          text: '讲师管理',
          routeName: '/teacher',
        },

        {
          icon: require('./images/icon-func-student.png'),
          text: '学员管理',
          routeName: '/student',
        },
      ],
    }
  }
  componentDidMount() {}
  handleItemClick = (val) => {
    console.log(val)
  }
  render() {
    return (
      <>
        <Grid
          onClick={this.handleItemClick}
          data={this.state.funcList}
          columnNum={3}
        />
      </>
    )
  }
}
