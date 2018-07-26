import React from 'react';
import { Button, Layout } from 'antd';
import Nav from './Nav';
import config from '../router/router.config.js';
import Route from '../router/route';
import '../scss/index.css';

const { Header, Content, Footer, Sider } = Layout;

export default class Index extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <Layout style={{minHeight: '100%'}}>
                <Sider>
                    <Nav></Nav>
                </Sider>
                <Layout>
                    <Header>
                        放置头部
                    </Header>
                    <Content>
                        <Route routes={config.routes}></Route>   
                    </Content>  
                </Layout>
            </Layout>
            // <div className="index">
            //   <Button type="primary">Button</Button>
            // </div>
          );
    }
}