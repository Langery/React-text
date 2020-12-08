import React from "react";
import { Breadcrumb } from 'antd';

const BreadCrumbModel = (props) => {
  return (
    <Breadcrumb>
      {props.order.map((item, index) => {
        return (<Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>)
      })}
    </Breadcrumb>
  )
}

export default BreadCrumbModel;