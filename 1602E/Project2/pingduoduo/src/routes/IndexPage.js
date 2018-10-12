import React from 'react';
import { connect } from 'dva';
import { Carousel } from 'antd';
import styles from './IndexPage.scss';

class IndexPage extends React.Component{
  constructor(){
    super()
  }

  componentDidMount(){
    this.props.getMiaosha();
  }

  onChange(e){
    console.log('e...', e);
  }

  render(){
    const imgs = ['http://t00img.yangkeduo.com/goods/images/2018-09-16/fad4f23851c59cc1e590139b781b3d11.jpeg?imageView2/q/50/2/w/750/format/webp',
      'http://t00img.yangkeduo.com/goods/images/2018-09-18/01084e8e789e6b47b26d23e84d2e07a0.jpeg?imageView2/q/50/2/w/750/format/webp',
      'http://t00img.yangkeduo.com/goods/images/2018-09-18/0aad3bccbf3d0a2b4df657b8479714fd.jpeg?imageView2/q/50/2/w/750/format/webp',
      'http://t00img.yangkeduo.com/goods/images/2018-09-16/e547c7c8315ee67323aaec03c431d23d.jpeg?imageView2/q/50/2/w/750/format/webp',
      'http://t00img.yangkeduo.com/goods/images/2018-08-11/2d945d812c94ac54c27cdaddc2560875.jpeg?imageView2/q/50/2/w/750/format/webp',
      'http://t00img.yangkeduo.com/goods/images/2018-09-18/8f78d394c93c8df9fb607406565010ad.jpeg?imageView2/q/50/2/w/750/format/webp'
    ]
    return <div>
      <header>我是header</header>
      {/* <Carousel afterChange={this.onChange.bind(this)}>{
        imgs.map((item, index)=>{
          return <img src={item} key={index}></img>
        })
      }</Carousel> */}
    </div>;
  }
}

IndexPage.propTypes = {
};

export default connect(null, (dispatch)=>{
  return {
    getMiaosha: ()=>{
      dispatch({
        type: 'miaosha/miaosha'
      })
    }
  }
})(IndexPage);
