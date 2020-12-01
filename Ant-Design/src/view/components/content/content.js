import React from "react";

import { Layout } from 'antd';
const { Content } = Layout

const ContentDemo = (props) => {
  const { children } = props.props;

  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        background: '#fff',
        minHeight: 300
      }}
    >
      {children}
    </Content>
  )
}

export default ContentDemo;
