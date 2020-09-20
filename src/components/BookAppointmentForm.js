import React from 'react'
import '../css/BookAppointmentForm.css'

class BookAppointmentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      name:"",
      phoneNumber:"",
      address:""
    }
  }

  changeFormValue(key, value){
    this.setState({
      [key]: value
    })
  }

  submitForm() {
    /**
     * make request here
     */
    alert(`name:${this.state.name}, phoneNumber:${this.state.phoneNumber}, address:${this.state.address}`)
  }

  render() {
    return(
      <div className="form-container">
        <div className="form-title">Schedule an Appointment</div>
        <div className="form-content">
          <input className="form-content-row" type="name" placeholder="Name" onChange={ (evt)=> this.changeFormValue( "name", evt.target.value ) } />
          <input className="form-content-row" type="phonenumber" placeholder="Phone Number" onChange={ (evt)=> this.changeFormValue( "phoneNumber", evt.target.value ) } />
        </div>
        <button className="form-submit-button" onClick={()=>this.submitForm()} >Book Now</button>
      </div>
    )
  }
}

export default BookAppointmentForm