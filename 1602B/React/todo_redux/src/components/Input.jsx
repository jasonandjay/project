import React from 'react';
import {connect} from 'react-redux';


class Input extends React.Component{
    constructor(){
        super();
    }

    changeText(e){
        // console.log(e.target.value);
        this.props.changeText(e.target.value);
    }

   
    render(){
        // console.log('this.props...', this.props);
        return <div>
            <input type="text" placeholder="todo..." value={this.props.text} onChange={(e)=>{this.changeText(e)}}/>
            <button onClick={this.props.save}>保存</button>
        </div>
    }
}
const mapStateToProps = (state, ownProps)=>{
    console.log('state...', state, ownProps);
    return {
        text: state.text
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        changeText: (text)=>dispatch({
            type: 'CHANGE_TEXT',
            payload: {
                text
            }
        }),
        save: ()=>dispatch({
            type: 'ADD_LIST'
        })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input)
