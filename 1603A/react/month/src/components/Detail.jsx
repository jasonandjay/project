import React, { Component } from 'react'
import { connect } from 'react-redux'


class Detail extends Component {
    componentDidMount(){
        // this.props.read(this.props.match.params.id);
    }

    render() {
        console.log('detail...', this.props);
        let {state} = this.props.location; 
        return (
            <div>
                <p>{state.id}</p>
                <p>{state.title}</p>
                <p>￥{state.price}</p>
                <p>{state.content}</p>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        read: id=>{
            dispatch({
                type: 'READ',
                payload: id
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(Detail)