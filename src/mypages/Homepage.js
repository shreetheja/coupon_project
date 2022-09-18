import React, { useEffect, useState } from "react";
import "./Homestyle.css";
import CompanyService from "../services/companyService";
import { useNavigate } from "react-router-dom";
const companyService = new CompanyService()
function Homepage() {
  const navlogin = useNavigate();
  /* const handleDelete = (id) => {
    console.log("Printing id", id);
    service
      .removeorder(id)
      .then((response) => {
        console.log("order deleted successfully", response.data);
        order_list();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
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
    
    <div className="homedesign">
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
              window.alert("Please Login to redeem");
              navlogin("/login");
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

export default Homepage;