import React, { Component } from "react";
// eslint-disable-next-line
import { Layout, Menu, Icon } from 'antd';
import './sidebar.css';

const { Header, Sider, Content } = Layout

class SiderDemo extends Component {
  state = {
    collapsed: false,
    menuList: [
      {
        key: 'one',
        type: 'user',
        span: 'nav 1'
      },
      {
        key: 'two',
        type: 'video-camera',
        span: 'nav 2'
      },
      {
        key: 'three',
        type: 'upload',
        span: 'nav 3'
      }
    ],
    current: 'one'
  }

  toggle = () => {
    // 顶部点击隐藏或展开左侧目录
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  routLink = (item, key, keyPath, domEvent, e) =>　{
    console.log(item)
    console.log(key)
    console.log(keyPath)
    console.log(domEvent)
    console.log(e)
  }
  

  render () {

    const { children } = this.props
    const showMenu = this.state.menuList.map(item => 
      <Menu.Item key={item.key}>
        <Icon type={item.type} />
        <span>{item.span}</span>
      </Menu.Item>
    )

    return (
      <Layout
        style={{
          minHeight: '100%'
        }}
      >
        <Sider
          style={{
            minHeight: '500px'
          }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" selectedKeys={[this.state.current]} onClick={this.routLink}>
            {showMenu}
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
            {children}
          </Content>
        </Layout>
      </Layout>
    )
  }

}

export default SiderDemo;