import React from 'react'
import logo from '../images/logo.svg'

class NavBar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="navbar">
        <img className="logo" src={logo}/>
        <div className="company-block">
          <div className="company-name">SRB Physio</div>
          <div className="company-motto">Overcome the pain</div>
        </div>
      </div>
    )
  }
}

export default NavBar
