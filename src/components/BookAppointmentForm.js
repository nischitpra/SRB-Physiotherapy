import React from 'react';

class BookAppointmentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      name:"",
      phoneNumber:"",
      date:"",
      disableButton: false,
    }
  }

  changeFormValue(key, value){
    this.setState({
      [key]: value
    })
  }

 submitForm() {
    this.setState({disableButton:true})

    const form = `https://srb-physio-backend.herokuapp.com/submit`

    fetch(form, {
      method: 'POST',
      headers: {
        'Accept': 'application/text',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: this.state.name, phoneNumber: this.state.phoneNumber, date: this.state.date})
    })
    .then(response=>{
      this.setState({disableButton:false})

      let formId=""
      if(response.ok){
        response.text().then(formId=>{
          this.props.updateFormData("formId", formId)
          if(this.props.slidingPanelRef!=null) {
            this.props.slidingPanelRef.current.nextPanel()
          }
        })
      }else{
        console.log("Something is not right. The server responded with error")
        alert("Please check from data and try again.")
      }
    }).catch(error=>{
      console.log("Could not submit form")
      this.setState({disableButton:false})
    })
  }


  render() {
    return(
      <div className="flex-center">
        <h1 className="book-appointment-form-caption">Also, we come to your home!</h1>
        <hr style={{width:"200px"}}/>
        <div className="form-container">
          <div className="form-title">Schedule an Appointment</div>
          <div className="form-content">
            <input className="form-content-row" type="name" placeholder="Name" onChange={ (evt)=> this.changeFormValue( "name", evt.target.value ) } />
            <input className="form-content-row" type="phonenumber" placeholder="Phone Number" onChange={ (evt)=> this.changeFormValue( "phoneNumber", evt.target.value ) } />
            <label className="form-content-row datepicker-container" >
              <span className="datepicker-label">Book date</span>
              <input className="datepicker" type="date" placeholder="Date" onChange={ (evt)=> this.changeFormValue("date", evt.target.value)} />
            </label>
          </div>
          <button className="form-submit-button" onClick={()=>this.submitForm() } disabled={this.state.disableButton} >Book Now</button>
        </div>
      </div>
    )
  }
}

export default BookAppointmentForm
