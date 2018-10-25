import React,{Fragment} from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.scss';
// import { Carousel, Icon } from 'antd';

class SearchPage extends React.PureComponent{
  componentDidMount(){
   
  }
  render(){
    
    return  <div>
       this is search page
    </div>;
  }
}

// IndexPage.propTypes = {
// };

const mapStateToProps = (state)=>{
  return {
   
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
