import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import CompanyService from '../services/companyService';
import authService from "../services/auth.service";
import AddCoupon from "./AddCoupon";

const companyService = new CompanyService();

const Getdetailsbycompanyname = () =>
{
    const navigatlanding = useNavigate();
    const {companyname} = useParams()
    const [allcompany,setAllcompany] = useState([])
    const getuserpswd = useLocation();  
    const logoutnavigate = ()=>{
      authService.logout();
      navigatlanding("/");
    }
    const fecthdata = () =>
    {
        companyService.getbycompname(companyname)
        .then((responsecomp) => {
            setAllcompany(responsecomp.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    const addcoupon = () =>
    {
        // let uname = getuserpswd.state.username;
        // let  pswd = getuserpswd.state.password;
        navigatlanding("/addcoupon")
        /* {state:{username:uname, password:pswd}}); */

      }

    const deleteCoupon = (company_id) =>
    {

        companyService.deleteCoupon(company_id).then(
        window.alert("deleted successfully")
      );
    }
    useEffect(() => {
        fecthdata();
        console.log(allcompany);
      }, []);
      return(
        <div>
        
        <button onClick={logoutnavigate
        } class="btn btn-danger" style={{float:"right"}}>Logout</button>

        <br></br>
        <br></br>
        <button onClick={addcoupon}>AddCoupon</button>
        <br></br>
        <center><table border="3">

        <tbody>
      {
          allcompany.map((company,index)=>(
            <tr>
            <td>{company.company_id}</td>
            <td>{company.company_name}</td>
            <td>{company.location}</td>
            <td>{company.product_category}</td>
            <td>{company.coupon.coupon_code}</td>
            <td>{company.coupon.coupon_product_name}</td>
            <td>{company.coupon.product_price}</td>
            <td>{company.coupon.coupon_discount}%</td>
            <td>{company.coupon.coupon_set_name}</td>
            <td><button className="btn btn-outline-primary" onClick={deleteCoupon(company.company_id)}>delete</button></td>
            </tr>
          ))
        }
        </tbody>
        </table>
        </center> 
          
        </div>
      )
}
export default Getdetailsbycompanyname;
