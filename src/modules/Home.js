import React, { Component } from 'react'
import patientCheckupImage from "../images/HomePatientDoctor.svg"
import BasicAppointmentForm from './BasicAppointmentForm'

import '../css/Home.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img className="flex-1"src={patientCheckupImage}/>
        <BasicAppointmentForm className="flex-center"/>
      </div>
    )
  }
}

export default Home