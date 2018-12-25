/* jshint esversion: 6 */
import React, { Component } from 'react';

class HelloWorld extends Component {
  state = {
    switch: 0,
    name: this.props.name1
  }

  clickHander = () => {
    console.log(this.refs) // {}
    const { name1 = 'Tom', name2 = 'Jack' } = this.props;

    if (this.state.switch === 0) {
      console.log(name1);
      this.setState({
        switch: 1,
        name: name2
      })
    } else {
      console.log(name2);
      this.setState({
        switch: 0,
        name: name1
      })
    }
  }

  refCallback = (elem) => {
    console.log(elem)
  }

  /*
  生命周期
  此方法指在组件第一次渲染完成后执行
   */
  componentDidMount (props) {
    console.log(this.refs)
  }

  render () {
    return (
      <div className="container" onClick={this.clickHander}>
        { this.state.name } say: Hello World!
        <div ref="hello" className="hello">Hello</div>
        {/* 回调函数 */}
        <div ref={this.refCallback} className="world">World</div>
      </div>
    )
  }
}

export default HelloWorld;
