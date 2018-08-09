import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        console.log(this.props.location.item);
        let item = this.props.location && this.props.location.item;
        if (!item){
            return null;
        }
        return (
            <div>
                <h3>{item.keyword}</h3>
                <ul>{
                    item.level2words.map((value, key)=>{
                        return <li key={key}>
                            <img src={value.imageUrl} alt=""/>
                            <span>{value.keyword}</span>   
                        </li>
                    })
                }</ul>  
                {/* {JSON.stringify(this.props.location.item)} */}
            </div>
        )
    }
}
