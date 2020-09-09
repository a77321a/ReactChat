/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-08 10:20:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-09 09:45:20
 */
import React from 'react';
import { connect } from 'react-redux'
function App (props) {
  let value = props.value
  return (
    <div className="App">
      {value}
      <button>加</button>
      <button>减</button>

    </div>
  );
}
const mapStateToProps = (state) => {
  return { value: state.value }
}
function add () {
  return {
    type: 'add'
  }
}
function desc () {
  return {
    type: 'desc'
  }
}

export default connect(mapStateToProps, { add, desc })(App);
