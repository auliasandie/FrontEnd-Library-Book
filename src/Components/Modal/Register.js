import React, { Component } from "react";
import "./Register.css";
import AuthService from "../AuthService/AuthService";
import {Link} from'react-router-dom';
import swal from "sweetalert";
import Axios from "axios";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Register extends Component {
  constructor(props) {
    super(props);

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.Auth = new AuthService();

    this.state = {
      fullName: null,
      email: null,
      password: null,
      username: null,
      id_level:1,
      formErrors: {
        fullName: "",
        username: "",
        email: "",
        password: "",
        id_level:""
      }
    };
    this.Auth = new AuthService();

  }

  handleSubmit = e => {
    e.preventDefault();
    
     this.Auth.register(this.state.fullName, this.state.username, this.state.email, this.state.password, this.state.id_level)
    .then(res => {
     Axios.post(`http://localhost:8000/api/library/register`)
    .then(()=> {
      swal("You already sign up!", "Please login", "success");
    }).then(function(response) {
      window.location.href='/'
    })
  
  })
    .catch(err=> {
      alert(err);
    })
   

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Full Name: ${this.state.fullName}
        Email: ${this.state.email}
        username: ${this.state.username}
        Password: ${this.state.password}
        id_level: ${this.state.id_level}
      `);
      
      this.Auth.register(this.state.fullName,this.state.username,this.state.email, this.state.password,this.state.id_level)

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "fullName":
        formErrors.fullName =
          value.length < 3 ? "minimum 4 characaters required" : "";
        break;
      case "username":
        formErrors.username =
          value.length < 3 ? "minimum 4 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  

  render() {
    const { formErrors } = this.state;
    

    return (
      <div id="registermodal" className="modal">
        <div className="modal-content">
          <h4 className="">Create Account</h4>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="fullName">
              <label htmlFor="fullName">Full Name</label>
              <input
                className={formErrors.fullName.length > 0 ? "error" : null}
                placeholder="Full Name"
                type="text"
                name="fullName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.fullName.length > 0 && (
                <span className="errorMessage">{formErrors.fullName}</span>
              )}
            </div>
            <div className="fullName">
              <label htmlFor="fullName">User Name</label>
              <input
                className={formErrors.fullName.length > 0 ? "error" : null}
                placeholder="User Name"
                type="text"
                name="username"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.fullName.length > 0 && (
                <span className="errorMessage">{formErrors.fullName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <p className="registeraccount">
                Already have an account? 
                  <a className="masuk" href="url">
                     Log In
                  </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;