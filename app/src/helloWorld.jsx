/* jshint esversion: 6 */
import React, {Component} from 'react';

class HelloWorld extends Component {
  clickHander = () => {
    console.log(this.props);
    console.log(this.props.name);
  };
  render () {
    return (
      <div onClick={this.clickHander}>
        { this.props.name } say:
        hello world
      </div>
    );
  };
};

export default HelloWorld;
