import React, { Component } from "react";
import { Row, Col } from 'antd';
import './homeIndex.css'
import 'antd/dist/antd.css';

class IndexHome extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col span={12} className="row1">col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8} className="row2">col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </div>
    );
  }
}

export default IndexHome;