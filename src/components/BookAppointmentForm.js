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

    const corsProxy = "https://cors-anywhere.herokuapp.com/"
    const form = `https://docs.google.com/forms/d/e/1FAIpQLSdzM-T-0_C6kr5AEugu7kSt_bcHO2nM7W2t1_AcfujsT7l_mA/formResponse?usp=pp_url&entry.1000057=${this.state.name}&entry.1000027=${this.state.phoneNumber}&entry.2055232012=${this.state.date}`

    fetch(corsProxy+form)
    .then(response=>{
      this.setState({disableButton:false})

      let formId=""
      if(response.ok){
        response.text().then(html=>{
          const identifier = "edit2="
          const startIndex = html.indexOf(identifier)+identifier.length
          for(let i=startIndex;i<html.length;i++){
            let character = html[i]
            if(character=="\"" || character=="&")break
            formId+=html[i]
          }

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
        <h1 className="book-appointment-form-caption">We come to your home!</h1>
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
