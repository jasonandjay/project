import React from 'react';

export default (WrapComponent, obj)=>{
    return class NewComponent extends React.Component{
        render(){
            return <div>
                    <WrapComponent {...this.props}/>    
                                        
                    <section style={Object.assign(style.section, obj.position=='top'?{top: 0}:{bottom:0})}>
                        <img style={style.img} src="https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo.png?max_age=19830212&d=20151105145423" alt=""/>
                        <button style={style.button}>下载APP</button>
                    </section>
                </div>
        }
    }
}

const style = {
    section: {
        position: 'fixed',
        width: '100%',
        height: '.88rem',
        background: '#31c27c',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 999
    },
    img: {
        width: '1.9rem',
        marginLeft: '.2rem'
    },
    button: {
        height: '.56rem',
        padding: '0 .24rem',
        lineHeight: '.56rem',
        borderRadius: '2rem',
        fontSize: '.28rem',
        background: '#149c5a',
        color: '#fff',
        border: 'none'
    }
}