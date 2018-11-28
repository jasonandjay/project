import React from 'react';
import {connect} from 'dva';

class Recommend extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.props.fetchList(33);
    setTimeout(()=>{
      this.setState({
        time: +new Date()
      })
    }, 1000);

    setTimeout(()=>{
      this.setState({
        time: +new Date()
      })
    }, 3000);
  }

  static getDerivedStateFromProps(props, state){
    console.log('props...', props, 'state...', state);
    let {match, location, history} = props;
    return {match, location, history};
  }

  getSnapshotBeforeUpdate(props, state){
    console.log('snap props...', props, 'snap state...', state);
    return null
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
