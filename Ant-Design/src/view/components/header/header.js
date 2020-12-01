import React from "react";

import { Layout, Icon } from 'antd';
const { Header } = Layout;

const HeaderDemo = (props) => {
  const toggle = () => {
    return () => {
      props.callback()
    }
  }
  return (
    <Header style={{background: '#fff', padding: 0}}>
      <Icon
        className="trigger"
        type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle()}
      />
    </Header>
  )
}

export default HeaderDemo;