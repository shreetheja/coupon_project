import React, { Component } from "react";
import "./home.component.css";
import UserService from "../services/user.service";
import  Background from "../pics/background.jpeg";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
          
        });
        console.log(response.data);
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    const myStyle={
      backgroundColor: "DodgerBlue",
      /* height:'100vh',
      marginTop:'-70px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', */
  };

    return (
      <div className="homebase" >
      {/* style={{backgroundImage: {Background}}}> */}
        <header className="jumbotron">
        <br/>
            <h2>{this.state.content}</h2>
        </header>
        
        <br></br>
        <br></br>
        <Link className="btn btn-dark btn-lg btnblink" data-toggle="button" to={"/home"} style={{marginTop: "160px", marginLeft:"600px"}}>Get Coupon Here</Link>
       {/*  <Link to="/complogin">gotoCompany</Link> */}
      </div>
    );
  }
}
export default Home;
