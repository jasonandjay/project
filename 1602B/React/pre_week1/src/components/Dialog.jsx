import React from 'react';
import '../scss/dialog.css';

export default class Dialog extends React.Component{
    constructor(){
        super();
        this.state = {
            text: '',
            isShow: false
        }
    }

    hideDialog(){
        this.setState({
            isShow: false
        })
    }

    ensureDialog(val){
        console.log(`点击了${val==true?'confirm':'prompt'}弹框，返回值是：${val}`);
        this.hideDialog();
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if (nextProps.type){
            this.setState({
                isShow: true
            })
        }
    }

    render(){
        if (!this.props.type || !this.state.isShow){
            return null;
        }

        let alertDialog = <div>
            <p>提示</p>
            <p>操作成功</p>
            <button onClick={()=>{this.hideDialog()}}>确定</button>
        </div>

        let confirmDialog = <div>
            <p>提示</p>
            <p>操作成功</p>
            <div>
                <button onClick={()=>{this.ensureDialog(true)}}>确定</button>
                <button onClick={()=>{this.hideDialog()}}>取消</button>
            </div>
        </div>

        let promptDialog = <div>
            <p>提示</p>
            <input type="text" value={this.state.text}
            onChange={e=>this.setState({text:e.target.value})}/>
            <div>
                <button onClick={()=>{this.ensureDialog(this.state.text)}}>确定</button>
                <button onClick={()=>{this.hideDialog()}}>取消</button>
            </div>
        </div>       
        return <div className="dialog">{
            this.props.type==='alert'?alertDialog:
            this.props.type==='confirm'?confirmDialog:
            this.props.type==='prompt'?promptDialog:null
        }</div>
    }
}