import React from 'react';
 

export default (props)=>{
    return <div>
        <span onClick={()=>{
            window.history.back();
        }}>{'<'}</span>
        <span>{window.location.pathname=='/list'?'酒水饮料':'商品详情'}</span>
        <span>...</span>
    </div>
}