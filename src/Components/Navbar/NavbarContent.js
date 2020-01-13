import React, { Fragment } from "react";
import logo from "../../Assets/books.png";
import logoSvg from "../../Assets/books.svg";
import { Link } from "react-router-dom";
import "./NavbarContent.css";
import AlertModal from "../Modal/alertModal";
//import modalRegister from '../Modal/modalRegister';
// import Auth from
import AuthService from "../AuthService/AuthService";
import withAuth from "../WithAuth/WithAuth";
import { withRouter } from "react-router-dom";
import decode from 'jwt-decode';

const Auth = new AuthService();


const NavbarContent = () => {

  
  const token = localStorage.getItem("id_token");
  let userProfile ;
  if (token) {
    userProfile = decode(token);
   
  }
  return (
    <div className="nav-wrapper z-depth-2 black">
      <a href="/#" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons white-text ">menu</i>
      </a>
      <div className="container-navbar">
        <a className="brand-logo right white-text">
          <img
            src={logoSvg}
            alt="books"
            height="26px"
            style={{
              marginRight: "10px",
              filter: "brightness(0) invert(1)"
            }}
          />
          <a
            className="logo-name"
            style={{ fontSize: "20px", marginRight: "10px" }}
          >
            Pinjam Buku
          </a>
         
          {token ? (<button type="button" className="btn modal-trigger" onClick={()=>{
            localStorage.removeItem("id_token")
            window.location.href='/'
    
          }}>
            Logout
          </button>): 
          (<Fragment>
          <button data-target="registermodal" className="btn modal-trigger" >
            Sign Up
          </button><button data-target="loginmodal" className="btn modal-trigger">
            Log in
          </button> 
          </Fragment>)}
          {/* <button data-target="" className="btn modal-trigger">Sign Up</button> */}
          
        </a>
      </div>

      <ul className="left hide-on-med-and-down">
        <li>
          <a href="/#">
            <i
              data-target="slide-out"
              className="material-icons white-text sidenav-trigger left"
            >
              menu
            </i>
          </a>
        </li>
        <li>
          <a
            className="dropdown-trigger white-text"
            href="/#"
            data-target="all-categories"
          >
            All Categories
            <i className="material-icons right white-text">arrow_drop_down</i>
          </a>
        </li>
        <li>
          <a
            className="dropdown-trigger white-text"
            href="/#"
            data-target="all-times"
          >
            All Times
            <i className="material-icons right white-text">arrow_drop_down</i>
          </a>
        </li>
        <li>
          <div className="input-field brand-logo center">
            <input
              id="search"
              type="search"
              required
              placeholder=" Search..."
              className=" black-text"
              style={{
                borderRadius: "50px",
                height: "40px",
                marginTop: "12px"
              }}
            />
            <label className="label-icon" htmlFor="search">
              <i
                className="material-icons"
                style={{
                  marginTop: "3px"
                }}
              >
                search
              </i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </li>
      </ul>
    </div>
  );
              };


export default NavbarContent;
