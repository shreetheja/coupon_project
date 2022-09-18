import React, { Component } from "react";

import "./board-company.css";
import authService from "../services/auth.service";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import CompanyService from "../services/companyService";

const companyService = new CompanyService()
function BoardCompany()
{
const {companyname} = useParams();
const navigatlanding = useNavigate();
 const [allcompany,setAllcompany] = useState([]);
 var sizee=0;
 const fecthdata = () =>
 {
     companyService.getCupon()
     .then((responsecomp) => {
         setAllcompany(responsecomp.data)
         sizee = responsecomp.data.length
     }).catch((error) => {
         console.log(error)
     })
 }

 const updateCoupon = (comp_myid) =>
 {
     //rediecting to addcoupon age and sending company_id to that page 
    navigatlanding("/addcoupon",{state:comp_myid})
    console.log(comp_myid,"why update automatically called?????????")
 }
 const addcoupon = () =>
 { 
    navigatlanding("/addcoupon").then(()=>{window.alert("Added successfully");sizee++}).catch(
      (error)=>console.log(error)
    )
}

const deleteCouponById = (comp_uid) =>
{
 companyService.deleteCoupon(comp_uid).then((reponse)=>{console.log("deleted successfullly");
 sizee--;window.alert("deleted successfully");
  }
  ).catch((error) => {
    console.log(error)
  })
  console.log(comp_uid,"why is automatically called?????????")
}
 useEffect(() => {
  fecthdata();
  console.log(allcompany);
}, [sizee]);
return(
  <div className="landingbase">
  <br></br>
  <br></br>
  <button className="btn btn-success" style={{marginleft:"580px"}} onClick={addcoupon} >AddCoupon</button>
  <br></br>
  <br></br>
  <center><table className="tabledesign" border={3}>

   <thead style={{color:"rgb(3, 4, 114)"}}>
        <tr>
          <td>company_id</td>
          <td>Company Name</td>       
          <td>Category</td>
          <td>coupon_code</td>
          <td>Coupon Product Name</td>
          <td>Product Price</td>
          <td>Coupon Discount</td>
          <td>Coupon saleName</td>
          
        </tr>
  </thead> 
  <tbody>
{
    allcompany.map((company,index)=>(
      <tr>
      <td>{company.company_id}</td>
      <td>{company.company_name}</td>   
      <td>{company.product_category}</td>
      <td>{company.coupon[0].coupon_code}</td>
      <td>{company.coupon[0].coupon_product_name}</td>
      <td>{company.coupon[0].product_price}</td>
      <td>{company.coupon[0].coupon_discount}%</td>
      <td>{company.coupon[0].coupon_set_name}</td>
     <td><button type="button" className="btn btn-danger" onClick={()=>deleteCouponById(company.company_id)}>delete</button></td>
      <td><button type="button" className="btn btn-danger" onClick={()=>updateCoupon(company.company_id)}>update</button></td>
      </tr>
    ))
  }
  </tbody>
  </table>
  </center> 
    
  </div>
)
}
export default BoardCompany;