/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-08 10:20:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-15 14:08:40
 */
import React from 'react';
class App extends React.Component {
  render () {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}


export default App;
