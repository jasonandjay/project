import React from 'react';
import {Table, Dropdown, Menu, Icon, Modal, Form, Input, DatePicker,Select} from 'antd';
import {getShopList} from '../../services/api';
import styles from './BasicList.less';
import { connect } from 'dva';

const FormItem = Form.Item;
const SelectOption = Select.Option;
const {TextArea} = Input;
// function addProperty(target){
//   target.prototype.list = [1,2,3,4,5,6];
//   target.prototype.name = 'ShopList';
// }
// function addProperty(name){
//   return function(target){
//     target.prototype.name = name;
//   }
// }
// function removeProperty(target){
//   delete target.prototype.name;
// }
// function connect(func){
//   return function(Target){
//     // return Target;
//     return class extends React.Component{
//       render(){
//         return <Target {...func()}/>
//       }
//     }
//   }
// }

// @addProperty('name')
// @removeProperty
// @connect(()=>{
//   return {
//     a: 1,
//     b: 2
//   }
// })
@connect(state=>{
  console.log('state...', state);
  return {}
})
@Form.create()
export default class ShopList extends React.PureComponent{
  constructor(props){
    super();
    this.state = {
      // 列表数据
      list: [],
      // 弹框显示与隐藏的控制
      visible: false,
      // 当前选中这一行的数据
      current: {}
    };
    console.log('this.list', this.list, this.name);
    console.log('this.props', props);
  }

  componentDidMount(){
    getShopList().then(res=>{
      console.log('res...', res);
      this.setState({
        list: res.list
      })
    });
  }

  deleteItem(id){
    console.log('id...', id);
    this.setState({
      list: this.state.list.filter(item=>item.id!=id)
    })
  }

  showEditModal = item => {
    this.setState({
      visible: true,
      current: item,
    });
  };

  editAndDelete = (key, currentItem)=>{
    if (key === 'edit') this.showEditModal(currentItem);
    else if (key === 'delete') {
      Modal.confirm({
        title: '删除店铺',
        content: '确定删除该店铺吗？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => this.deleteItem(currentItem.id),
      });
    }
  }

  handleSubmit(){
    console.log('表格提交成功');
  }

  formLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 13 },
  };

  getModalContent = () => {
    // let {getFieldDecorator} = this.props;
    const {
      form: { getFieldDecorator },
    } = this.props;
    let current = this.state.current;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="门店名称" {...this.formLayout}>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入门店名称' }],
            initialValue: current.name,
          })(<Input placeholder="请输入" />)}
        </FormItem>
        <FormItem label="开始时间" {...this.formLayout}>
          {getFieldDecorator('createdAt', {
            rules: [{ required: true, message: '请选择开始时间' }],
            initialValue: current.createdAt ? moment(current.createdAt) : null,
          })(
            <DatePicker
              showTime
              placeholder="请选择"
              format="YYYY-MM-DD HH:mm:ss"
              style={{ width: '100%' }}
            />
          )}
        </FormItem>
        <FormItem label="任务负责人" {...this.formLayout}>
          {getFieldDecorator('owner', {
            rules: [{ required: true, message: '请选择任务负责人' }],
            initialValue: current.owner,
          })(
            <Select placeholder="请选择">
              <SelectOption value="付晓晓">付晓晓</SelectOption>
              <SelectOption value="周毛毛">周毛毛</SelectOption>
            </Select>
          )}
        </FormItem>
        <FormItem {...this.formLayout} label="产品描述">
          {getFieldDecorator('subDescription', {
            rules: [{ message: '请输入至少五个字符的产品描述！', min: 5},
            { message: '请输入最多六个字符的产品描述！', max:6 }],
            initialValue: current.subDescription,
          })(<TextArea rows={4} placeholder="请输入至少五个字符" />)}
        </FormItem>
      </Form>
    );
  };

  render(){
    const columns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '门店名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '门店信息',
      dataIndex: 'info',
      width: 200,
      key: 'info',
    }, {
      title: '门店地址',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '门店图片',
      key: 'img',
      render: (row)=>{
        return <img style={{width:'50px'}}src={row.img}/>
      }
    }, {
      title: '所在城市',
      dataIndex: 'city',
      key: 'city',
    }, {
      title: '门店状态',
      key: 'status',
      render: (row)=>{
        return row.status==1?'正常营业': row.status==2?'门店关闭': '审核中'
      }
    }, {
      title: '门店收入',
      dataIndex: 'income',
      key: 'income'
    }, {
      title: '门店物品数量',
      dataIndex: 'count',
      key: 'count'
    }, {
      title: '操作',
      key: 'action',
      render: row=>{
        return  <Dropdown
          overlay={
            <Menu onClick={({ key }) => this.editAndDelete(key, row)}>
              <Menu.Item key="edit">编辑</Menu.Item>
              <Menu.Item key="delete">删除</Menu.Item>
            </Menu>
          }
        >
          <a>
            更多 <Icon type="down" />
          </a>
        </Dropdown>
        }
    }];

    const pagination = {
      pageSize: 5
    }

    const modalFooter = { okText: '保存', onOk: ()=>{
      const { dispatch, form } = this.props;
      const { current } = this.state;
      const id = current ? current.id : '';

      // setTimeout(() => this.addBtn.blur(), 0);
      form.validateFields((err, fieldsValue) => {
        if (err) return;
        console.log(fieldsValue);
      });
      console.log('this.current', this.state.current);
    }, onCancel: ()=>{
      this.setState({visible:false})
    } };

    return <React.Fragment>
      <Table dataSource={this.state.list} columns={columns} pagination={pagination}/>
      <Modal
          title='店铺信息编辑'
          className={styles.standardListForm}
          width={640}
          bodyStyle={{ padding: '72px 0' }}
          destroyOnClose
          visible={this.state.visible}
          {...modalFooter}
        >
          {this.getModalContent()}
        </Modal>
    </React.Fragment>
  }
}
