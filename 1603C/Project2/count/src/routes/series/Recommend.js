import React from 'react';
import {connect} from 'dva';

class Recommend extends React.Component{
  componentDidMount(){
    this.props.fetchList(33);
  }

  render(){
    return <h2>recommend</h2>
  }
}

const mapStateToProps = (state)=>{
  return {}
}
const mapDispatchToProps = (dispatch)=>{
  return {
    fetchList: (rid)=>{
      dispatch({
        type: 'series/getSeries',
        payload: rid
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
