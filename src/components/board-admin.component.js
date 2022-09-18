import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import axios from "axios";

/* export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}
 */
function BoardAdmin()
{
  
 const [allcustomer,setAllcustomer] = useState([]);
 const fecthdata = () =>
 {
  axios.get('http://localhost:8070/api/auth/getuser')
  .then(response => setAllcustomer(response.data));
 }
 useEffect(() => {
  fecthdata();
  console.log(allcustomer);
}, []);
return(
  <div>
  <br></br>
  <br></br>
  <br></br>
  <center><table >
  <thead style={{color:"rgb(3, 4, 114)"}}>
        <tr>
          <td>ID</td>
          <td>User Name</td>       
          <td>Email</td>
          <td style={{width:"100px"}}>Password</td>
          <td>Customer_Role</td>
        </tr>
  </thead> 
  <tbody>
  {
    allcustomer.map((customer,index)=>(
      <tr>
      <td>{customer.id}</td>
      <tr>
      <td>{customer.id}</td>
      <td>{customer.username}</td>
      <td>{customer.email}</td>
      <td style={{width:"100px"}}>{customer.password}</td>
      <td>{customer.roles.map((rolename)=> (
        <div>{rolename.name}</div>
      ))}</td>
      </tr>
      </tr>

    ))
  }
  </tbody>
  </table>
  </center> 
    
  </div>
)
}
export default BoardAdmin;