import React, { Component } from 'react'
import patientCheckupImage from "../images/HomePatientDoctor.svg"
import BookAppointmentForm from '../components/BookAppointmentForm'
import '../css/Home.css'


class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img className="home-patient-image"src={patientCheckupImage}/>
        <div className="home-book-appointment-form">
          <h1 className="home-book-appointment-form-caption">We come to your home!</h1>
          <hr style={{width:"200px"}}/>
          <BookAppointmentForm className="home-book-appointment-form"/>
        </div>
      </div>
    )
  }
}

export default Home