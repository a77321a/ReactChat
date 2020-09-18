import React, { Component } from 'react'
import { List } from 'antd-mobile'
import { getCourseList } from './api'
const Item = List.Item
const Brief = Item.Brief
export default class CourseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courseList: [],
    }
  }

  componentDidMount() {
    this.handleGetCourseList()
  }
  handleGetCourseList = () => {
    getCourseList({ course_classify_id: 0 }).then((res) => {
      console.log(res)
      this.setState({ courseList: res.list })
    })
  }
  render() {
    return (
      <>
        <List className="my-list">
          {this.state.courseList.map((v, k) => {
            return (
              <Item
                key={k}
                extra="10:30"
                align="top"
                thumb={v.cover_img}
                multipleLine
              >
                {v.title} <Brief>{(v.price / 100).toFixed(2)}</Brief>
              </Item>
            )
          })}
        </List>
      </>
    )
  }
}
