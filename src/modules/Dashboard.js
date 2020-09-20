import React from 'react'
import Home from './Home'
import NavBar from '../components/NavBar'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <NavBar/>
        <Home/>
      </div>
    )
  }
}

export default Dashboard