import React from 'react'
import logo from '../images/logo.png'

class NavBar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="navbar">
        <img className="logo" src={logo}/>
        <div className="company-block">
          <div className="company-name">SRB Physiotherapy</div>
          <div className="company-motto">Overcome the pain</div>
        </div>
      </div>
    )
  }
}

export default NavBar
