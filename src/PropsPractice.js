import React from 'react';
import './PropsPractice.css';

class PropsPractice  extends React.Component {
  render(){
    return(
    <div className="PropsPractice">
    <p>Your Name is : {this.props.Name}</p>
    <p>Your Age is : {this.props.Age}</p>
    <p>Your Email is : {this.props.Email}</p>
    <p>Your Phone no is : {this.props.PhoneNo}</p>

    </div>
    )
  };
}

PropsPractice.defaultProps={
  Name:"abc",
  Age:"12" ,
  Email:"someone@gmail.com",
  PhoneNo:"0000000000" 
};
export default PropsPractice;
