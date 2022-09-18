import React, { Component } from "react";
import UserService from "../services/user.service";
import { useState,useEffect } from "react";
import CompanyService from "../services/companyService";
import "./board-user.component.css";
import { Navigate, NavLink,useNavigate } from "react-router-dom";
const companyService = new CompanyService()
const BoardUser = ()=>{
  const navigate = useNavigate()
  /* constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  componentDidMount() {
    UserService.getUserBoard().then(
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
      }
    );
  } */
  const [allcoupons,setAllcoupons] = useState([])
  const showAllcoupons = () =>{
    companyService.getCupon().then((couponresponse)=> {
      setAllcoupons(couponresponse.data)
    })
  }
  useEffect(()=>{
    showAllcoupons()
    console.log(allcoupons);
  },[])
  return (
    
    <div className="landingbase">
      <div >
      <br></br>
      <center><table className="tabledesign" border={3}>
      <thead style={{color:"rgb(3, 4, 114)"}}>
        <tr>
          <td>Company Name</td>
          <td>Product Category</td>
          <td>Coupon Product Name</td>
          <td>Product Price</td>
          <td>Coupon Discount</td>
          <td>Coupon Code</td>
          <td>redeem</td>
        </tr>
      </thead>
      <tbody>
      {
          allcoupons.map((company,index)=>(
            <tr>
            <td>{company.company_name}</td>
            <td>{company.product_category}</td>
            <td>{company.coupon.coupon_product_name}</td>
            <td>{company.coupon.product_price}</td>
            <td>{company.coupon.coupon_discount}%</td>
            <td>{company.coupon.coupon_code}</td>
            <td><button className="btn btn-outline-primary" onClick={()=>
            {
              Navigate("/payment");
            }}>Redeem</button></td>
            </tr>
          ))
        }
        </tbody>
      </table>
      </center>
      </div>
    </div> 
    
  );
}
export default BoardUser;
