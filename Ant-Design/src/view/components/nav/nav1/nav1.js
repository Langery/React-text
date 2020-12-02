import React from "react";
import { Breadcrumb, Form, Input } from 'antd';

const NavOne = () => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  }
  return (
    <div className="nav-one">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Nav 1</Breadcrumb.Item>
      </Breadcrumb>
      <Form
        {...layout}
        name="form"
      >
        <Form.Item
          label="Input"
          name="input"
          rules={[]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  )
}

export default NavOne;
