import React from 'react';
import {connect} from 'dva'

class IndexPage extends React.PureComponent{
   render(){
    let {count, handleClick} = this.props;

    return <React.Fragment>
      <button onClick={()=>handleClick('+')}>+</button>
      <span>{count}</span>
      <button onClick={()=>handleClick('-')}>-</button>
    </React.Fragment>
  }
}
const mapStateToProps = state=>{
  console.log('state...', state);
  return {
    count: state.index.count
  };
}

const mapDispatchToProps = dispatch=>{
  return {
    handleClick: type=>{
      dispatch({
        type: 'index/handleCount',
        payload: type
      })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
