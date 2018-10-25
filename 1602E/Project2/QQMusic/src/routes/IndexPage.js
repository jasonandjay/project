import React,{Fragment} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import { Carousel, Icon } from 'antd';

class IndexPage extends React.PureComponent{
  componentDidMount(){
    this.props.getIndex();
  }
  render(){
    let {slider, radioList} = this.props;
    return  <div className={styles.wrap}>
        <Carousel autoplay="true" speed="300">{
          slider.map((item, index)=>{
            return <a key={index} href={item.linkUrl}>
              <img src={item.picUrl} alt="" className={styles.banner}/>
            </a>
          })
        }</Carousel>
        <section className={styles.radio}>
          <p>电台</p>
          <div className={styles.radioList}>
            {radioList.map((item, index)=>{
              return <div key={index}>
                <img src={item.picUrl} alt=""/>
                <Icon type="play-circle" style={{ fontSize: '16px', color: '#fff' }} className={styles.icon}></Icon>
                <span>{item.Ftitle}</span>
              </div>
            })}
          </div>
        </section>
    </div>;
  }
}

IndexPage.propTypes = {
};

const mapStateToProps = (state)=>{
  return {
    slider: state.index.slider,
    radioList: state.index.radioList
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    getIndex: ()=>{
      dispatch({
        type: 'index/getIndex'
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
