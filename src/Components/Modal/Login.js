import React, { Component } from "react";
import "./Login.css";
import AuthService from "../AuthService/AuthService";
import swal from "sweetalert";
import Axios from "axios";
import { Link } from "react-router-dom"; 
// import { withRouter } from 'react-router-dom'


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

class Login extends Component {
  constructor(props) {
    super(props);

    //penambahan baru
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Auth = new AuthService();


    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: ""
      }
    };

  }
  handleSubmit = e => {
    e.preventDefault();
  

    //penambahan baru
    this.Auth.login(this.state.email, this.state.password)
    
    .then(res => {
      if (res) {
        Axios.post(`http://localhost:8000/api/library/login`)
        .then(()=>{
          swal("Good job!", "You already login", "success");
        }).then(function(response) {
          window.location.href='/'
        })
      }
      // swal("Good job!", "You clicked the button!", "success");
      // window.location.href='/'
    
    })
    .catch(err => {
        alert(err);
    })


    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };
//   handleSubmit = e => {
//     e.preventDefault();
//     //penambahan baru
    


//     if (formValid(this.state)) {
//       console.log(`
//         --SUBMITTING--
//         Email: ${this.state.email}
//         Password: ${this.state.password}
//       `);
//       this.Auth.login(this.state.email, this.state.password)
//         .then(res => {
//           console.log('hasil res',res)
//           if (res.token.length > 0) {
//             console.log('hasil res',res)
//             // history.push('/');
//           }
          
//         })
//         .catch(err => {
//             alert('error',err)
//         })
//     // } else {
//       // console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
//     // }
//   };
// }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Minimum 6 characaters required" : "";
        break;
      default:
        break;
    }
//check state (kasih conditional)
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  componentWillMount(){
    // if(this.Auth.loggedIn())window.location.href = '/'
  }
  

  render() {
    const { formErrors } = this.state;
    console.log(this.props)

    return (
      <div id="loginmodal" className="modal">
        <div className="modal-content login">
          <h4 className="titlelogin">Log In</h4>
          <form onSubmit={this.handleSubmit} noValidate>
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
            <div className="login">
              <button type="submit">Login</button>
              {/* <small>No account yet?</small> */}
              {/* <p className="loginaccount">
                No account yet? 
                <Link to={"/register"}>
                  <a className="daftar" href="url">
                     Sign Up
                  </a>
                </Link>
              </p> */}
            </div>
          </form>
        </div>
        </div>
    );
  }
  //penambahan baru
  handleChange(e){
      this.setState(
          {
              [e.target.name]: e.target.value
          }
      )
  }
}

export default Login;