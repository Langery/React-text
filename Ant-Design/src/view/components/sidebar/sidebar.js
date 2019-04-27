import React, { Component } from "react";
// eslint-disable-next-line
import { Layout, Menu, Icon } from 'antd';
import './sidebar.css';

const { Header, Sider, Content } = Layout

class SiderDemo extends Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render () {
    return (
      <Layout
        style={{
          minHeight: '100%'
        }}
      >
        <Sider
          style={{
            minHeight: '100%'
          }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item>
              <Icon type="video-camera"/>
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item>
              <Icon type="upload"/>
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 300
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    )
  }

}

export default SiderDemo;