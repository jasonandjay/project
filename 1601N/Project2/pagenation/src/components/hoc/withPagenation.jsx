import React from 'react';

export default (WrapComponent)=>{
    return class NewComponent extends WrapComponent{
        constructor(props) {
            super(props)
            this.state ={...this.state, current:1} 
        }
        
        click(current){
            if (current<1){
                current = 1;
            }
            this.setState({
                current
            }, ()=>{
                super.onChange(current);
            })
        }

        render(){
            let {total, pageSize} = this.props;
            let pageNum = Math.ceil(total/pageSize),
                pageList = [];
            for (let i=1; i<=pageNum; i++){
                pageList.push(i);
            }
            return <div>{
                super.render()
            }
            <footer>
            <span style={style.span} 
            onClick={()=>this.click(this.state.current-1)}>上一页</span>{
                pageList.map((item, index)=>{
                    return <span key={index} style={style.span} className={(index+1)==this.state.current?'active':''}
                    onClick={()=>this.click(index+1)}>{item}</span>
                })
            }<span style={style.span} 
            onClick={()=>this.click(this.state.current+1)}>下一页</span>   
            </footer>            
            </div>
        }
    }
}

const style = {
    span: {
        fontSize: '.2rem',
        padding: '5px',
        border: '1px solid #ccc',
        margin: '5px'
    }
}