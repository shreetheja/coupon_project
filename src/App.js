import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from './footer';
import AuthService from "./services/auth.service";
//import Home from "./mypages/Home";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardCompany from "./components/board-company.component";
import BoardAdmin from "./components/board-admin.component";
// import Home from "./Home";
//import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import Homepage from "./mypages/Homepage";
import About from "./mypages/About";
import Contact from "./mypages/Contact";
import Getdetailsbycompanyname from "./components/GetDetailsCompanyName";
import Companylogin from "./components/company-login-board";
import AddCoupon from "./components/AddCoupon";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showCompanyBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showCompanyBoard: user.roles.includes("ROLE_COMPANY"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showCompanyBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showCompanyBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark fontspecific" style={{marginBottom:"0px", paddingBottom:"0px"}}>
        {/* /*"navbar navbar-expand navbar-dark bg-dark">*/ }
          {/* <Link to={"/"} className="navbar-brand">
            COUPONS AND DEALS
          </Link> */}
          <Link to={"/"} className="logo">
                  <h2>
                    <span>D</span>eal
                    <span>S</span>y
                  </h2>
          </Link> 
          <div className="navbar-nav mr-auto" style={{marginLeft: "760px"}}>
          

           <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </li>
            {showCompanyBoard && (
              <li className="nav-item">
                <Link to={"/company"} className="nav-link">
                  Company Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board 
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div>
         {/* className="container mt-3"> */}
        <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/home" element={<Homepage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/complogin" element={<Companylogin />} />
            <Route exact path="/addcoupon" element={<AddCoupon />}/>            
           {/*  <Route exact path="/company/:companyname" element={<Getdetailsbycompanyname />} /> */}
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route path="/user" element={<BoardUser/>} />
            <Route path="/company" element={<BoardCompany/>} />
            <Route path="/admin" element={<BoardAdmin/>} />
          </Routes>
        </div>
        <Footer/>
        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }
}

export default App;
