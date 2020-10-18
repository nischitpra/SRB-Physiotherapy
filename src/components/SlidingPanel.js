import React from 'react'

class SlidingPanel extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      currentContentIndex: 0,
      maxContentIndex: props.panels.length-1,
      currentContent: props.panels[0],
      nextContent: props.panels[1],
      nextButtonLabel: props.startButtonLabel,
    }

  }

  _enterAnimation() {
    document.getElementById("sliding-panel-content").className = "enter"
  }

  _exitAnimation() {
    document.getElementById("sliding-panel-content").className = "exit"
  }

  nextPanel() {
    const currentContentIndex = this.state.currentContentIndex
    if(currentContentIndex < this.state.maxContentIndex) {
      this._exitAnimation()
    } else {
      // todo: call final submission here
      return
    }

    setTimeout(()=>{
      const newIndex = this.state.currentContentIndex + 1
      const newContent = this.props.panels[newIndex]

      let nextContent = null
      let buttonLabel = this.props.endButtonLabel
      if(newIndex + 1 < this.props.panels.length){
        buttonLabel = this.props.nextButtonLabel
        nextContent = this.props.panels[newIndex+1]
      }

      this.setState({
        currentContentIndex: newIndex,
        currentContent: newContent,
        nextContent: nextContent,
        nextButtonLabel: buttonLabel
      }, this._enterAnimation)

    }, 250)
  }

  render() {
    return(
      <div>
        <div id="sliding-panel-content">
          {this.state.currentContent}
        </div>
        { this.props.startButtonLabel && <button onClick={()=>this.nextPanel()}>{this.state.nextButtonLabel}</button> }
      </div>
    )
  }

}

export default SlidingPanel
