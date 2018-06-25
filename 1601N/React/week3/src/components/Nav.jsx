import React from 'react';
import { Menu, Icon } from 'antd';
// import 'antd/lib/menu/style/css';
import {Link} from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: '100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="console" title={<span><Icon type="laptop" /><span>控制台</span></span>}></SubMenu>
        <SubMenu key="manage" title={<span><Icon type="setting" /><span>闲置管理</span></span>}></SubMenu>
        <SubMenu key="purchase" title={<span><Icon type="shopping-cart" /><span>采购管理</span></span>}>
          <Menu.Item key="order"><Link to="/purchase/order">预购管理</Link></Menu.Item>
          <Menu.Item key="check"><Link to="/purchase/check">预约检看管理</Link></Menu.Item>
          <Menu.Item key="delegation"><Link to="/purchase/delegation">代采委托管理</Link></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
