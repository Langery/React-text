import React, { Component } from "react";
import './homeIndex.css'
import 'antd/dist/antd.css';
import SiderDemo from '../components/sidebar/sidebar'

class IndexHome extends Component {
  render () {
    return (
      <div>
        {/* main frame */}
        <SiderDemo></SiderDemo>
      </div>
    );
  }
}

export default IndexHome;