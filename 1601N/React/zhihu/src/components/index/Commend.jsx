import React from 'react';
import WithTitle from '../hoc/WithTitle';
import WithLoading from '../hoc/WithLoading';

class Gallery extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading: false
            })
        }, 10000)
    }

    render(){
        return <div>Commend
        </div>
    }
}

export default WithTitle(WithLoading(Gallery));