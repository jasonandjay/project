import React from 'react';
import {Table, Dropdown, Menu, Icon, Modal, Form, Input, DatePicker,Select,Button,notification} from 'antd';
import {getShopList, updateShop, closeShop} from '../../../services/api';
import styles from './ListPage.less';
import { connect } from 'dva';
import Result from '@/components/Result';

const FormItem = Form.Item;
const SelectOption=Select.Option
const {TextArea } = Input

@connect(state=>{
  return {}
})
@Form.create()
export default class ShopList extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      list: [],
      visible: false,
      current:{}
    }
  }

  componentDidMount() {
    getShopList().then(res => {
      this.setState({
        list: res.data.list
      })
    });
  }

  showEditModal = item => {
    this.setState({
      visible: true,
      current: item
    })
  }

  clickRow(){
    console.log(11)
  }

  handleSubmit(e){
    e.preventDefault();
    const { dispatch, form } = this.props;
    const { current } = this.state;
    const id = current ? current.id : '';

    form.validateFields((err, fieldsValue) => {
      if (err) return;
      console.log('fieldsValue', fieldsValue);
      // 转化店铺状态为数字
      if ('123'.indexOf(fieldsValue.status) == -1){
        fieldsValue.status = fieldsValue.status=='正常营业'?1:fieldsValue.status=='门店关闭'?2:3
      }
      updateShop(id, fieldsValue).then(res=>{
        console.log('res...', res);
      })
      let list = this.state.list;
      list.forEach(item=>{
        if (item.id === id){
          item = Object.assign(item, fieldsValue);
        }
      })
      this.setState({
        done: true,
        visible: false,
        current: Object.assign(current, fieldsValue),
        list
      });
      // dispatch({
        // type: 'list/submit',
        // payload: { id, ...fieldsValue },
      // });
    });
    // console.log('表格提交成功');
  }

  deleteItem = id => {
    console.log('id...', id);
    closeShop(id).then(res=>{
      console.log('res...', res);
      if (res.code == 1){
        let list = [...this.state.list];
        list.forEach(item=>{
          if (item.id == id){
            item.status = 2
          }
        })
        this.setState({
          list
        })
        notification.open({
          message: '关闭门店成功',
          description: res.msg
        });
      }else{
        notification.open({
          message: '关闭门店失败',
          description: res.msg
        });
      }
    })
    // this.setState({
      // list: this.state.list.filter(item=>item.id!=id)
    // })
  }
editAndDelete=(key,currentItem)=>{

    if (key === 'edit') {
      this.showEditModal(currentItem);
    } else if (key === 'delete') {
      Modal.confirm({
        title: '关闭店铺',
        content: '确定关闭该店铺吗？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => this.deleteItem(currentItem.id),
      });
    }
  }

  formLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 13 },
  };

  getModalContent = () => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    let {current,done} = this.state;
    if (done) {
      return (
        <Result
          type="success"
          title="操作成功"
          description="门店信息修改成功"
          actions={
            <Button type="primary" onClick={this.setState({done: false})}>
              知道了
            </Button>
          }
          className={styles.formResult}
        />
      );
    }
    return (
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="门店名称" {...this.formLayout}>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请编辑门店名称' }],
              initialValue: current.name,
            })(<Input placeholder="请输入" />)}
          </FormItem>
          <FormItem label="住址" {...this.formLayout}>
            {getFieldDecorator('address', {
              rules: [{ required: true, message: '请编辑门店住址' }],
              initialValue: current.address,
            })(<Input placeholder="请输入" />)}
          </FormItem>
          <FormItem label="城市" {...this.formLayout}>
            {getFieldDecorator('city', {
              rules: [{ required: true, message: '请编辑门店城市' }],
              initialValue: current.city,
            })(<Input placeholder="请输入" />)}
          </FormItem>
          {/* <FormItem label="收入" {...this.formLayout}>
            {getFieldDecorator('income', {
              rules: [{ required: true, message: '请编辑门店收入' }],
              initialValue: current.income,
            })(<Input placeholder="请输入" />)}
          </FormItem> */}
          <FormItem label="门店状态" {...this.formLayout}>
            {getFieldDecorator('status', {
              rules: [{ required: true, message: '请编辑门店状态' }],
              initialValue: current.status=== 1 ? '正常营业' : current.status === 2 ? '门店关闭' : '审核中',
            })(<Select placeholder="请选择">
            <SelectOption value="1">正常营业</SelectOption>
            <SelectOption value="2">门店关闭</SelectOption>
            <SelectOption value="3">审核中</SelectOption>
          </Select>)}
          </FormItem>
          {/* <FormItem label="商品数量" {...this.formLayout}>
            {getFieldDecorator('count', {
              rules: [{ required: true, message: '请编辑商品数量' }],
              initialValue: current.count,
            })(<Input placeholder="请输入" />)}
          </FormItem> */}
          <FormItem {...this.formLayout} label="门店信息">
            {getFieldDecorator('info', {
              rules: [{ message: '请输入至少五个字符的产品描述！', min: 5},
              { message: '请输入最多六十个字符的产品描述！', max:600 }],
              initialValue: current.info,
            })(<TextArea rows={4} placeholder="请输入至少五个字符" />)}
          </FormItem>
  </Form>
    );
  };

  render() {
    const columns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '门店名称',
      dataIndex: 'name',
      width: 100,
      key: 'name',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '城市',
      dataIndex: 'city',
      key: 'city',
    }, {
      title: '门店图片',
      key: 'img',
      render: (row) => {
        return <img style = {{width: '50px'}} src = {row.img} />
      }
    }, {
      title: '收入',
      dataIndex: 'income',
      key: 'income'
    }, {
      title: '门店状态',
      key: 'status',
      render: (row) => {
        return row.status == 1 ? '正常营业' : row.status == 2 ? '门店关闭' : '审核中'
      }
    }, {
      title: '门店物品数量',
      dataIndex: 'count',
      key: 'count'
    }, {
      title: '操作',
      key: 'action',
      render:(row)=>{
          // return <Dropdown
          //   overlay = {
          //     <Menu onClick={({ key }) => this.editAndDelete(key, row)}>
          //       <Menu.Item key="edit">编辑</Menu.Item>
          //       <Menu.Item key="delete">删除</Menu.Item>
          //     </Menu>
          //   }
          // >
          //  <a>
          //   更多 <Icon type="down" />
          // </a>
          // </Dropdown>
          return <div>
            <Button type="primary" size="small" onClick={()=>this.editAndDelete('edit', row)}>编辑</Button>
            <Button type="primary" size="small" onClick={()=>this.editAndDelete('delete', row)}>关闭</Button>
          </div>
      }
    }];

    const pagination = {
      pageSize: 5
    }

    const modalFooter = { okText: '保存', onOk: this.handleSubmit.bind(this) };

    return ( <React.Fragment>
        <Table rowKey={record=>record.id} dataSource = {this.state.list} columns = {columns} pagination={pagination}
          onRow={(record) => {
            return {
              onClick: () => {this.clickRow()},       // 点击行
            };
          }}
        />
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
    </React.Fragment>)
  }
}
