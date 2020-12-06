import React from 'react';

class AddressAndProblemForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      address:"",
      problem:"",
    }
  }

  changeFormValue(key, value) {
    this.setState({
      [key]: value
    })
  }

 submitForm() {
    this.setState({disableButton:true})

    const form = `https://srb-physio-backend.herokuapp.com/update`

    fetch(form,{
      method: 'POST',
      headers: {
        'Accept': 'application/text',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({formId: this.props.formId, address: this.state.address, problem: this.state.problem})
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
        <div className="form-container">
          <div className="form-title">Just a few more details</div>
          <div className="form-content">
            <textarea className="form-content-row textarea" type="name" placeholder="Address" onChange={ (evt)=> this.changeFormValue( "address", evt.target.value ) } />
            <input className="form-content-row" type="name" placeholder="Problem you're facing" onChange={ (evt)=> this.changeFormValue( "problem", evt.target.value ) } />
          </div>
          <button className="form-submit-button" onClick={()=>this.submitForm() } disabled={this.state.disableButton} >Submit</button>
        </div>
      </div>
    )
  }
}

export default AddressAndProblemForm
