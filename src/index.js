import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';


// ReactDOM.render(
//     <Router>
//         <div>
//             <Route path='/' component="App" />
//         </div>
//     </Router>,
//     document.getElementById('root')

// )

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const Header = () => {
//     return (
//     <nav>  
//     <div className="nav-wrapper white">
//           <a href="#" className="brand-logo right black-text" >
//               Library
//             </a>
//             <ul id="nav-mobile" className="left hide-on-med-and-down">
//               <li>
//               <Dropdown>
//                 <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 All Category
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                  <Dropdown.Item href="#/action-1">Thriller</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Fiction</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">Action</Dropdown.Item>
//                 </Dropdown.Menu>
//                 </Dropdown>
//               </li>
//               <li>
//               <Dropdown>
//                 <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 All Time
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                  <Dropdown.Item href="#/action-1">New Added</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Fiction</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
//                 </Dropdown.Menu>
//                 </Dropdown>
//               </li>
//               <li>
              
//               </li>
//               </ul>
//           </div>
//     </nav>   
//     )};
//HEADER
// import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";


// const Header = () => {
// return (
// <Navbar bg="light" expand="lg">
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <NavDropdown title="All Category" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Thriller</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Fiction</NavDropdown.Item>
//       </NavDropdown>
//       <NavDropdown title="All Time" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">New Added</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Thriller</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Fiction</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//     </Form>
//     <img src="https://image.flaticon.com/icons/svg/808/808506.svg"></img>
//     <a className="brand-logo right black-text">Library</a>
//   </Navbar.Collapse>
// </Navbar>
// )};
// export default Header;


// // import React, { Component } from 'react';
// // class Header extends Component {
// //     render() {
// //         return (
// //             <div className="Header">
// //                 <a href="#!" className="brand-logo right">Library</a>
// //                 <nav>
// //                     <div className="nav-wrapper">
// //                         <ul id="nav-mobile" className="left hide-on-med-and-down">
// //                             <ul id="dropdown1" className="dropdown-content">
// //                                 <li><a href="#!">Action</a></li>
// //                                 <li><a href="#!">Thriller</a></li>
// //                                 <li><a href="#!">Fiction</a></li>
// //                                 <a className="dropdown-trigger" href="#!" data-targer="dropdown1">All Categorize</a>
// //                             </ul>
// //                         </ul>
// //                     </div>
// //                 </nav>
// //             </div>
// //         )
// //     }

// // }
// // export default Header;
