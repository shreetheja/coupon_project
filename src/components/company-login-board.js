import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

const Companylogin =()=>
{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [token,setToken] = useState("");
    const navigate = useNavigate();
    const handlecompany = () =>{
        setToken(authService.login(username,password));
            
        }
    const handlelogincompany =  ()=>
    {
        handlecompany();
        if(token!="")
        {
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            navigate(`/company/${username}`,{state:{username:username,password:password}})
        }
    }   
    return (
        <div>
            <form>
                <label>
                    UserName: 
                </label>
                <input type="text" required onChange={e=>setUsername(e.target.value)}></input>
                <label>
                    UserName: 
                </label>
                <input type="password" required onChange={e=>setPassword(e.target.value)}></input>
                <button type="button" className="btn btn-success" onClick={handlelogincompany}>submit</button>

            </form>
        </div>
    )
}
export default Companylogin;