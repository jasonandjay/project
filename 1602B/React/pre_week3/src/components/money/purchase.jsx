import React, {Fragment} from 'react';
import {Table, Icon} from 'antd'

export default class Delegate extends React.Component{
    constructor(){
        super();
    }

    render(){
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            width: 150,
          }, {
            title: 'Age',
            dataIndex: 'age',
            width: 150,
          }, {
            title: 'Address',
            dataIndex: 'address',
          }, {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 150,
            render: (rows) => <Fragment>
                    <p>{rows.key}</p>   
                    <Icon type="edit" title="编辑"/>
                    <Icon style={{marginLeft: 50}} type="delete" title="删除"/>   
                </Fragment>,
          },];
          const data = [];
          for (let i = 0; i < 100; i++) {
            data.push({
              key: i,
              name: `Edward King ${i}`,
              age: 32,
              address: `London, Park Lane no. ${i}`,
            });
          }          
        return <div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize:8 }} scroll={{ y: '100%' }} />
        </div>;
    }
}