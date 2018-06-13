import React from 'react';
import {Link,Route} from 'react-router-dom';

export default class Gallery extends React.Component{
    constructor(){
        super()
        this.state = {
            IMAGES: [
                { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
                { id: 1, title: "Lime Green", color: "LimeGreen" },
                { id: 2, title: "Tomato", color: "Tomato" },
                { id: 3, title: "Seven Ate Nine", color: "#789" },
                { id: 4, title: "Crimson", color: "Crimson" }
            ]
        }
    }

    render(){
        return <div>{
            this.state.IMAGES.map((item, index)=>{
                return <li key={index}>
                    <Link to={`/gallery/${index}`}>
                        <div style={{background:item.color,height:80}}></div>
                        <span>{item.title}</span>
                    </Link>
                </li>
            })
        }<Route path="/gallery/:id?" render={({match})=>{
            let index = match.params.id;
            return <div className="mask">
                <h3>{this.state.IMAGES[index].title}</h3>
                <div style={{background:this.state.IMAGES[index].color,height:80}}></div>
            </div>
        }}></Route>
        </div>
    }
}