import React from 'react';
import { Breadcrumb, Table, Icon, Tooltip, Divider, Dropdown, Menu, Timeline, Select, Button, notification} from 'antd';
import { Link } from 'react-router-dom';
// import 'antd/lib/breadcrumb/style/css';
// import 'antd/lib/table/style/css';

const { Option } = Select;
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};
export default class Order extends React.Component {
    constructor() {
        super();
        
        this.state = {
            dataSource: [{
                id: 1,
                icon: 'wifi',
                show: 0,
            },{
                id: 2,
                icon: 'man',
                show: 0,
            },{
                id: 3,
                icon: 'woman',
                show: 1,
            },{
                id: 4,
                icon: 'shop',
                show: 1,
            },{
                id: 5,
                icon: 'gift',
                show: 1,
            },{
                id: 6,
                icon: 'wifi',
                show: 0,
            },{
                id: 7,
                icon: 'man',
                show: 0,
            },{
                id: 8,
                icon: 'woman',
                show: 1,
            },{
                id: 9,
                icon: 'shop',
                show: 1,
            },{
                id: 10,
                icon: 'gift',
                show: 1,
            },{
                id: 11,
                icon: 'wifi',
                show: 0,
            },{
                id: 12,
                icon: 'man',
                show: 0,
            },{
                id: 13,
                icon: 'woman',
                show: 1,
            },{
                id: 14,
                icon: 'shop',
                show: 1,
            },{
                id: 15,
                icon: 'gift',
                show: 1,
            }]
        }
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
              </Menu.Item>
            </Menu>
          );
        this.columns = [{
            title: '分类ID',
            dataIndex: 'id',
            key: 'id'
        },{
            title: '分类图标',
            dataIndex: 'icon',
            key: 'icon',
            render: icon=><Icon type={icon} title={icon}/>
        },{
            title: '展示状态',
            dataIndex: 'show',
            key: 'show',
            render: (show, record)=><span>{show?'展示':'隐藏'}</span>
        },{
            title: '操作',
            key: 'action',
            render: (text, record)=>{
                return <div>
                        <Tooltip title="编辑">
                            <Icon type="edit" onClick={()=>alert(`编辑id为${record.id}的行`)}/>
                        </Tooltip>
                        <Divider type="vertical" />
                        <Icon type="delete" title="删除" onClick={()=>alert(`删除id为${record.id}的行`)}/>
                        <Divider type="vertical" />
                        <Dropdown overlay={menu}>
                           <a className="ant-dropdown-link" href="#">
                                more <Icon type="down" />
                            </a>
                        </Dropdown>
                    </div>
            }
        }]
    }

    render() {
        return <div>
             <Breadcrumb separator="/">
                <Breadcrumb.Item>当前位置: </Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/purchase">闲置管理</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/purchase/order">闲置物品分类管理</Link></Breadcrumb.Item>
            </Breadcrumb>
            <Table columns={this.columns} dataSource={this.state.dataSource}></Table>
            <Timeline>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="red">
                <p>Solve initial network problems 1</p>
                <p>Solve initial network problems 2</p>
                <p>Solve initial network problems 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
            </Timeline>
            <Select
                defaultValue="topRight"
                style={{ width: 120, marginRight: 10 }}
                onChange={(val) => {
                    notification.config({
                    placement: val,
                    });
                }}
                >
                {options.map(val => <Option key={val} value={val}>{val}</Option>)}
            </Select>
            <Button
                type="primary"
                onClick={openNotification}
                >
                Open the notification box
            </Button>
        </div>
    }
}