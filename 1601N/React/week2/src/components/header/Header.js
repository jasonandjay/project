import React, { Component } from 'react'
import Select from '../select/Select'
import './header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div><span className="logo">掘金</span><Select/></div><span>登录·注册</span>
      </div>
    )
  }
}

export default Header
