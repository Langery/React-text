import React from "react";
import NavOne from '../nav/nav1/nav1.tsx'
import NavTwo from '../nav/nav2/nav2'
import NavThree from '../nav/nav3/nav3'

import { Layout } from 'antd';
const { Content } = Layout

const ContentDemo = (props) => {
  // const { children } = props.props;
  let children;
  const key = props.item.key;
  if (key === 'one') {
    // 通过 key 的不同来动态获取内容信息
    children = (
      <NavOne></NavOne>
    )
  } else if (key === 'two') {
    children = (
      <NavTwo></NavTwo>
    )
  } else if (key === 'three') {
    children = (
      <NavThree></NavThree>
    )
  }

  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        background: '#fff',
        minHeight: 300
      }}
    >
      {/* 动态修改页面内容，仿插槽 */}
      { children }
    </Content>
  )
}

export default ContentDemo;
