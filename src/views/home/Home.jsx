import React, { Component } from 'react'
import { getAddData, getAccumulateData } from './api'
import DataCard from './card/DataCard'
import { WhiteSpace } from 'antd-mobile'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addData: [],
      AccumulateData: [],
    }
  }

  componentDidMount() {
    this.handleGetAddData()
    this.handleGetAccumulateData()
  }
  handleGetAddData = () => {
    getAddData().then((res) => {
      let data = [
        {
          title: '订单金额',
          num: res.order_price,
          count: res.add_order_price / 100,
          tip:
            '已完成订单实付金额合计，包含学员线上支付订单、学习卡兑换订单+管理员后台导入订单',
          isPrice: true,
        },
        {
          title: '订单笔数',
          margin: '0 10px',
          num: res.order_num,
          count: res.add_order_num,
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
  handleGetAccumulateData = () => {
    getAccumulateData().then((res) => {
      console.log(res)
      let data = [
        {
          title: '订单金额',
          count: Number(res.order_price),
          tip:
            '已完成订单实付金额合计，包含学员线上支付订单、学习卡兑换订单+管理员后台导入订单',
          isPrice: true,
        },
        {
          title: '订单笔数',
          count: res.order_num,
          tip:
            '已完成订单合计数量，包含学员线上支付订单、学习卡兑换订单+管理员后台导入订单',
        },
        {
          title: '学员人数',
          count: res.user_num,
          // tip:
          //   '学员数为：当前平台内的所有学员数，包含禁用和启用状态的学员数，不包含已删除和注销的学员数',
        },
        {
          title: '讲师人数',
          count: res.teacher_num,
          // tip: '讲师数为：当前平台内已审核通过的讲师数，不包含已删除的讲师',
        },
        {
          title: '助教人数',
          count: res.assistant_num,
          // tip: '当前平台内已审核通过的助教数，不包含已删除的助教',
        },
        {
          title: '课程门数',
          count: res.course_num,
          // tip: '当前平台内已创建的所有类型课程数，不包含已删除的课程',
        },
        {
          title: '课时节数',
          count: res.periods_num,
          // tip: '当前平台内已创建的课程所包含的课时数，不包含已删除的课时',
        },
        {
          title: '客单价',
          count: res.single_price,
          tip: '已完成订单实付金额合计÷已完成订单对应学员人数合计(去重)',
          isPrice: true,
        },
      ]
      this.setState({ AccumulateData: data })
    })
  }

  render() {
    return (
      <>
        <WhiteSpace size="lg" />

        <DataCard
          compare
          key="add"
          title="今日新增"
          data={this.state.addData}
        />
        <WhiteSpace size="lg" />
        <DataCard key="acc" title="累计数据" data={this.state.AccumulateData} />
      </>
    )
  }
}
