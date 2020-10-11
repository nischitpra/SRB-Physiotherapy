import React from 'react';
import '../css/Thankyou.css';

class Thankyou extends React.Component {
  render() {
    return(
      <div className="flex-center">
        <h1 className="book-appointment-form-caption">Thankyou!</h1>
        <div className="form-container">
          <div className="form-title-thankyou">We will contact you shortly</div>
        </div>
      </div>
    )
  }
}

export default Thankyou
