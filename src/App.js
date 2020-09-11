/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-08 10:20:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-11 18:21:49
 */
import React from 'react';
import { connect } from 'react-redux'
const add = () => ({
  type: 'add'
})
const desc = () => ({
  type: 'desc'
})
@connect(
  state => ({ value: state.counter.value }),
  { add, desc }
)
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    console.log(this.props)
    let value = this.props.value
    return (
      <div className="App">
        {value}
        <button onClick={this.props.add}>加</button>
        <button onClick={this.props.desc}>减</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { value: state.value }
}


export default App;
