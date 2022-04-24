import React, { useState } from "react";
// eslint-disable-next-line
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu} from 'antd';
import ContentDemo from '../content/content';
import HeaderDemo from '../header/header'
import './sidebar.css';

const { Sider } = Layout;

const SiderDemo = props => {

  // eslint-disable-next-line
  const [collapsed, setCollapsed] = useState(false);
  // eslint-disable-next-line
  const [menuList, setMenuList] = useState([
    {
      key: 'one',
      type: 'UserOutlined',
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
  ]);

  const [current, setCurrent] = useState('one');
  const [item, setItem] = useState({
    key: 'one'
  })

  const getCollapsed = (data) => {
    setCollapsed(data);
  }

  const routLink = (item) => {
    setCurrent(item.key);
    setItem(item);
  }
  

    const showMenu = menuList.map(item => 
      <Menu.Item key={item.key}>
        {/* <Icon type={item.type} /> */}
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
          collapsed={collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" selectedKeys={[current]} onClick={routLink}>
            {showMenu}
          </Menu>
        </Sider>
        <Layout>
          {/* header */}
          <HeaderDemo
            sendCollapsed={collapsed}
            getBackCollapsed={getCollapsed}
          ></HeaderDemo>
          {/* content */}
          <ContentDemo
            props={props}
            item={item}
          ></ContentDemo>
        </Layout>
      </Layout>
    )

}

export default SiderDemo;