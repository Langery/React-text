import React, { useState, useEffect } from "react";

import './headere.css';

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const { Header } = Layout;

const HeaderDemo = props => {

  // eslint-disable-next-line
  const [collapsed, setCollapsed] =  useState(props.sendCollapsed)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    props.getBackCollapsed(collapsed);
  }, [collapsed])
  return (
    <Header className="header_style">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle,
      })}
    </Header>
  )
}

export default HeaderDemo;