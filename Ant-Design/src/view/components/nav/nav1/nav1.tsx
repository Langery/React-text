import React, { useEffect } from "react";
import BreadCrumbModel from '../../breadcrumb/breadcrumb';
import { Form, Input, Button } from 'antd';

const FormSelf: React.FC<> = () => {
  const Inner = <ItemInner/>
  return (
    <Form.Item
      label="Text"
      name="text"
    >
      {/* <ItemInner></ItemInner> */}
      {Inner}
    </Form.Item>
  )
}

interface InnerProps {
  _v?: String
}

const ItemInner:React.FC<InnerProps> = (_v) => {
  console.log(_v)
  return (
    <Input value={_v.value} />
  )
}

const NavOne = () => {
  const order = [
    'Home', 'Nav 1'
  ];

  useEffect(() => {

  })

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
        labelCol={{span: 4}}
        wrapperCol={{span: 14}}
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
        <FormSelf></FormSelf>
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
