import React from "react";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import CompanyService from "../services/companyService";
import "./addCoupon.css";
const companyService = new CompanyService()

const AddCoupon = () =>
{
    const getuserid = useLocation()//checks for any received value from any component(here board-company-component)
    const [company_id,setCompany_id] = useState(0); 
    const [location,setlocation] = useState("");
    const [company_email,setCompany_email] = useState("");
    const [company_name,setCompany_name] = useState("");
    const company_pswd = localStorage.getItem('password');
    const [product_category,setProduct_category] = useState("");
    const [coupon_Id,setCoupon_Id] = useState(0);
    const [coupon_discount,setCoupon_discount] = useState("");
    const [coupon_code,setCoupon_code] = useState("");
    const [product_id,setProduct_id] = useState(0);
    const [coupon_product_name,setCoupon_product_name] = useState("");
    const[product_price,setProduct_price] = useState(0);
    const[coupon_set_name,setCoupon_set_name] = useState("");
    console.log(getuserid.state);
    const coupon = {coupon_Id,coupon_discount,coupon_code,product_id,coupon_product_name,product_price,coupon_set_name}
    const company = {company_id,company_name,location,company_email,company_pswd,product_category,coupon:[coupon]}
    
    const addcouponfront = () =>
    {
        console.log(company);
        companyService.addnewcoupon(company).then((response) =>{
            console.log(response.data);
        }).catch(console.error);
    }
    const updateCoupon=(ev) =>
    {
        ev.preventDefault();
        if(getuserid.state)
        {
            companyService.updateCouponById(getuserid.state,company).then((response)=>{
                console.log("updated",response.data)
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
    useEffect(() => {
        if(getuserid.state)//cotains the id sent from board-company component
        {
            //promise object returned from service through axios call.promise contains then and catch
            companyService.getcouponbycompId(getuserid.state).then((response)=>{
                setCompany_id(response.data.company_id)
                setlocation(response.data.location)
                setCompany_email(response.data.company_email)
                setCompany_name(response.data.company_name)
                setProduct_category(response.data.product_category)
                setCoupon_Id(response.data.coupon.coupon_Id)
                setCoupon_discount(response.data.coupon.coupon_discount)
                setCoupon_code(response.data.coupon.coupon_code)
                setProduct_id(response.data.coupon.product_id)
                setCoupon_product_name(response.data.coupon.coupon_product_name)
                setProduct_price(response.data.coupon.product_price)
                setCoupon_set_name(response.data.coupon.coupon_set_name)
            }
            ).catch(
                (error)=>console.log(error)
            )
        }
      }, []);

       return (
        <div className="addingform" >
            <form className="formdesign"  style={{marginLeft: "420px",backgroundColor: "aquamarine"}}>
            <label>
                    company_id: 
                </label>
                <input type="number" required value={company_id} onChange={e=>setCompany_id(e.target.value)}></input>
                <label>
                    CompanyName:
                </label>
                <input type="text" required  value={company_name} onChange={e=>setCompany_name(e.target.value)}></input>
                <label>
                    location:
                </label>
                <input type="text" required value={location} onChange={e=>setlocation(e.target.value)}></input>
                <label>
                    company_email
                </label>
                <input type="text" required value={company_email} onChange={e=>setCompany_email(e.target.value)}></input>
                <label>
                    product_category
                </label>
                <input type="text" required  value={product_category} onChange={e=>setProduct_category(e.target.value)}></input>
                <label>
                    coupon_Id
                </label>
                <input type="number" required value={coupon_Id} onChange={e=>setCoupon_Id(e.target.value)}></input>
                <label>
                    coupon_discount
                </label>
                <input type="text" required value={coupon_discount} onChange={e=>setCoupon_discount(e.target.value)}></input>
                <label>
                    coupon_code
                </label>
                <input type="text" required value={coupon_code} onChange={e=>setCoupon_code(e.target.value)}></input>
                <label>
                    Product_ID
                </label>
                <input type="number" required value={product_id} onChange={e=>setProduct_id(e.target.value)}></input>
                <label>
                    Product_Name
                </label>
                <input type="text" required value={coupon_product_name} onChange={e=> setCoupon_product_name(e.target.value)}></input>
                <label>
                    Product_price
                </label>
                <input type="number" required value={product_price} onChange={e=> setProduct_price(e.target.value)}></input>
                <label>
                    coupon_set_name
                </label>
                <input type="text" required value={coupon_set_name} onChange={e=> setCoupon_set_name(e.target.value)}></input>
                <br></br>
                <br></br>
           <button onClick={addcouponfront} type="button">Add Coupon </button>
           <br></br>
           <button onClick={(e)=>updateCoupon(e)} type="button">update Coupon </button>
           </form>
           
           <br></br>
           <br></br>
           
        </div>
       )
} 
export default AddCoupon;