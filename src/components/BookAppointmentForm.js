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
    // alert(`name:${this.state.name}, phoneNumber:${this.state.phoneNumber}, address:${this.state.address}`)

    if(this.props.slidingPanelRef!=null) {
      this.props.slidingPanelRef.current.nextPanel()
    }
  }

  render() {
    return(
      <div className="flex-center">
        <h1 className="book-appointment-form-caption">We come to your home!</h1>
        <hr style={{width:"200px"}}/>
        <div className="form-container">
          <div className="form-title">Schedule an Appointment</div>
          <div className="form-content">
            <input className="form-content-row" type="name" placeholder="Name" onChange={ (evt)=> this.changeFormValue( "name", evt.target.value ) } />
            <input className="form-content-row" type="phonenumber" placeholder="Phone Number" onChange={ (evt)=> this.changeFormValue( "phoneNumber", evt.target.value ) } />
          </div>
          <button className="form-submit-button" onClick={()=>this.submitForm()} >Book Now</button>
        </div>
      </div>
    )
  }
}

export default BookAppointmentForm