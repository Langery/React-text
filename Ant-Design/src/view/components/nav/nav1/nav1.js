import React from "react";
import BreadCrumbModel from '../../breadcrumb/breadcrumb';
import { Form, Input } from 'antd';

const NavOne = () => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };
  const order = [
    'Home', 'Nav 1'
  ];
  return (
    <div className="nav-one">
      <BreadCrumbModel
        order={order}
      ></BreadCrumbModel>
      <Form
        {...layout}
        name="form"
        layout="horizontal"
      >
        <Form.Item
          label="Input"
          name="input"
          rules={[]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </div>
  )
}

export default NavOne;
