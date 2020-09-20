import React, { Component } from 'react'
import patientCheckupImage from "../images/HomePatientDoctor.svg"
import BasicAppointmentForm from './BasicAppointmentForm'

import '../css/Home.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img className="home-patient-image"src={patientCheckupImage}/>
        <BasicAppointmentForm className="home-book-appointment-form"/>
      </div>
    )
  }
}

export default Home