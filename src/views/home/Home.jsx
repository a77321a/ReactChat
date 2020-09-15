import React, { Component } from 'react'
import { List } from 'antd-mobile'
import { getAddData } from './api'

const Item = List.Item
const Brief = Item.Brief

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addData: [],
    }
  }

  componentDidMount() {
    getAddData().then((res) => {
      let data = [
        {
          title: '订单金额',
          num: res.order_price,
          count: res.add_order_price / 100,
          // icon: require('@/assets/images/home/icon-increase-price.png'),
          tip:
            '已完成订单实付金额合计，包含学员线上支付订单、学习卡兑换订单+管理员后台导入订单',
          isPrice: true,
        },
        {
          title: '订单笔数',
          margin: '0 10px',
          num: res.order_num,
          count: res.add_order_num,
          // icon: require('@/assets/images/home/icon-increase-order.png'),
          tip:
            '已完成订单合计数量，包含学员线上支付订单、学习卡兑换订单+管理员后台导入订单',
        },
        {
          title: '学员人数',
          num: res.user_num,
          count: res.add_user_num,
        },
      ]
      this.setState({ addData: data })
    })
  }

  render() {
    return (
      <>
        <List renderHeader={() => '今日新增'} className="my-list">
          {this.state.addData.map((v, k) => {
            return (
              <Item multipleLine extra="extra content">
                {v.title} <Brief>subtitle</Brief>
              </Item>
            )
          })}
        </List>
        <List renderHeader={() => '累计数据'} className="my-list">
          <Item multipleLine extra="extra content">
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
      </>
    )
  }
}
