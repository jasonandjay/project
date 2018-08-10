import React from 'react';

export default (props)=>{
    return  <div>
        <span onClick={()=>
            window.history.back()
        }>{'<'}</span>
        <span>{props.children}</span>
    </div>
}