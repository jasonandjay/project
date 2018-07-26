import React from 'react';
import { Menu, Icon, Button } from 'antd';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;

export default class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        }
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div style={{ width: 200,height:'100%' }}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>控制台</span></span>}>
                        <Menu.Item key="1">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>闲置管理</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>采购管理</span></span>}>
                        <Menu.Item key="9">
                            <Link to="/money/purchase">预购管理</Link>
                        </Menu.Item>
                        <Menu.Item key="11">
                            <Link to="/money/subscribe">预约管理</Link>
                        </Menu.Item>
                        <Menu.Item key="12">    
                            <Link to="/money/delegate ">预约管理</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}