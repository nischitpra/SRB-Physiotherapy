import React from 'react'
import BookAppointmentForm from '../components/BookAppointmentForm'
import SlidingPanel from '../components/SlidingPanel'

class BasicAppointmentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      formId:""
    }

    this.slidingPanelRef = React.createRef();

    this.updateFormData = this.updateFormData.bind(this)

    this.render1 = this.render1.bind(this)
    this.render2 = this.render2.bind(this)
    this.render3 = this.render3.bind(this)
  }

  updateFormData(key, value) {
    this.setState({
      [key]: value
    })
  }

  render1() {
    return(
      <BookAppointmentForm slidingPanelRef={this.slidingPanelRef} updateFormData={this.updateFormData}/>
    )
  }


  render2() {
    return(
      <div>
        This is plane 2. This should slide in after plane 1<br/>
        <button onClick={()=>this.slidingPanelRef.current.nextPanel()}>Next</button>
      </div>
    )
  }

  render3() {
    return(
      <div>
        This is plane 3. This should slide in after plane 2.<br/>
        <button onClick={()=>alert("submit form!")}>Submit</button>
      </div>
    )
  }

 

  render() {
    return(
      <div className={this.props.className}>
        <SlidingPanel ref={this.slidingPanelRef} panels={[this.render1(), this.render2(), this.render3()]}/>
      </div>
    )
  }

}

export default BasicAppointmentForm