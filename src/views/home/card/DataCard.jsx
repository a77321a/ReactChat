import React, { Component } from 'react'
import { List } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief
export default class DataCard extends Component {
  render() {
    return (
      <div>
        <List renderHeader={() => this.props.title} className="my-list">
          {this.props.data.map((v, k) => {
            return (
              <Item
                key={k}
                multipleLine
                extra={v.isPrice ? '￥' + v.count.toFixed(2) : v.count}
              >
                {v.title}
                {this.props.compare ? (
                  <Brief>
                    较昨日：
                    {v.num == 0 ? (
                      '无变化'
                    ) : v.num > 0 ? (
                      <span style={{ color: 'red' }}>+{v.num}</span>
                    ) : (
                      <span style={{ color: 'green' }}>-{v.num}</span>
                    )}
                  </Brief>
                ) : null}
              </Item>
            )
          })}
        </List>
      </div>
    )
  }
}
