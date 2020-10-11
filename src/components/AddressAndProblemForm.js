import React from 'react';
import '../css/AddressAndProblemForm.css';

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

    const corsProxy = "https://cors-anywhere.herokuapp.com/"
    const form = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdzM-T-0_C6kr5AEugu7kSt_bcHO2nM7W2t1_AcfujsT7l_mA/formResponse?edit2=${this.props.formId}&entry.1000025=${this.state.address}&entry.329804431=${this.state.problem}`

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
        <div className="form-container">
          <div className="form-title">Just a few more details</div>
          <div className="form-content">
            <textarea className="form-content-row textarea" type="name" placeholder="Address" onChange={ (evt)=> this.changeFormValue( "address", evt.target.value ) } />
            <textarea className="form-content-row textarea" type="name" placeholder="Problem you're facing" onChange={ (evt)=> this.changeFormValue( "problem", evt.target.value ) } />
          </div>
          <button className="form-submit-button" onClick={()=>this.submitForm() } disabled={this.state.disableButton} >Submit</button>
        </div>
      </div>
    )
  }
}

export default AddressAndProblemForm
