import React from "react";
import BreadCrumbModel from '../../breadcrumb/breadcrumb';
import { Form, Input, Button } from 'antd';

const NavOne = () => {
  const order = [
    'Home', 'Nav 1'
  ];

  const onFinish = (value) => {
    console.log(value)
  }

  return (
    <div className="nav-one">
      <BreadCrumbModel
        order={order}
      ></BreadCrumbModel>
      <Form
        name="form"
        layout="horizontal"
        onFinish={onFinish}
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
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default NavOne;
