import React, { Component } from "react";
// eslint-disable-next-line
import { Layout, Menu, Icon } from 'antd';
import ContentDemo from '../content/content';
import HeaderDemo from '../header/header'
import './sidebar.css';

const { Sider } = Layout;

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
    current: 'one',
    item: {
      key: 'one'
    }
  }

  toggle = function() {
    // 顶部点击隐藏或展开左侧目录
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  routLink = (item) =>　{
    // console.log(item)
    this.setState({
      current: item.key,
      item: item
    })
  }
  

  render () {
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
          {/* header */}
          <HeaderDemo
            state={this.state}
            callback={this.toggle.bind(this)}
          ></HeaderDemo>
          {/* content */}
          <ContentDemo
            props={this.props}
            item={this.state.item}
          ></ContentDemo>
        </Layout>
      </Layout>
    )
  }

}

export default SiderDemo;