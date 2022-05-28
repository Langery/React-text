import React, { useEffect, useState } from "react";
import BreadCrumbModel from '../../breadcrumb/breadcrumb';
import { Form, Input, Button } from 'antd';

const FormSelf: React.FC<> = (props) => {
  const changeValue = (data) => {
    props.backUp(data)
  }
  const Inner = <ItemInner backInput={changeValue} />
  console.log(Inner)
  return (
    <Form.Item
      label="Text"
      name="text"
      rules={[]}
    >
      {Inner}
    </Form.Item>
  )
}

const ItemInner:React.FC<> = (props) => {
  const handleChange = (e) => {
    const { value } = e.target;
    props.backInput(value)
  }
  
  return (
    <Input onChange={handleChange} />
  )
}

const NavOne = () => {
  // eslint-disable-next-line
  const [order, setOrder] = useState([
    'Home', 'Nav 1'
  ]);

  const form = Form.useForm()[0];
  console.log(form);

  const [textValue, setTextValue] = useState(null)

  useEffect(() => {

  })

  const onFinish = (value) => {
    console.log(value)
    value.text = textValue;
    form.resetFields();
  }

  const selfValue = (data) => {
    setTextValue(data)
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
        form={form}
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
        <FormSelf backUp={selfValue}></FormSelf>
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
