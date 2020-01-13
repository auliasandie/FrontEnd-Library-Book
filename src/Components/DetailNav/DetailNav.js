import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


const DetailNav = props => {
  const {index, onDelete, to} = props;
  return (
    <nav className='transparent z-depth-0'>
      <div className='nav-wrapper transparent z-depth-0'>
        <Link 
        to={to}
        className='btn-floating btn-large transparent z-depth-0' style={{margin: '10px 0 0 20px'}}><i className='material-icons'>arrow_back</i>
        </Link>
        <ul className='right'>
          <li>
            <a className='modal-trigger'
            data-target='editBook'
            href={`${index}#`}
            style={{
              fontSize: '18px',
              textShadow : '2px 2px black'
            }}>
              Edit
            </a>
          </li>
          <li>
            <a onClick={onDelete}
            // className='modal-trigger'
            // data-target='modalAlert'
            href={`${index}#`}
            style={{
              fontSize: '18px',
              textShadow: '2px 2px black'
            }}>
              Delete
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DetailNav;
// import React, { Component } from "react";
// import M from "materialize-css";
// import SweetAlert from "react-bootstrap-sweetalert";

// class DetailNav extends Component {
//   componentDidMount() {
//     M.AutoInit();
//   }
//   constructor(props) {
//     super(props);

//     this.state = {
//       alert: null
//     };
//   }

//   deleteThisGoal() {
//     const getAlert = () => (
//       <SweetAlert success onConfirm={() => this.hideAlert()}>
//         The Book <b>{this.props.title} </b> Has Been Deleted
//       </SweetAlert>
//     );

//     this.setState({
//       alert: getAlert()
//     });
//   }

//   hideAlert() {
//     console.log("Hiding alert...");
//     this.setState({
//       alert: null
//     });
//   }

//   render() {
//     return (
//       <div>
//         <div className="nav-wrapper">
//           <nav className="transparent z-depth-0 nav-detail">
//             <div className="na-nav">
//               <a href="http://localhost:3000/" className="left">
//                 <i className="small material-icons">arrow_back</i>
//               </a>
//               <ul className="right">
//                 <li>
//                   <a className=" modal-trigger" href="#modal-edit">
//                     Edit
//                   </a>
//                 </li>
//                 <li>|</li>
//                 <li>
//                   <a href={`?ide=$(this.props.alert)`} onClick={() => this.deleteThisGoal()}>Delete</a>
//                   {this.state.alert}
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//         <section
//           style={{
//             backgroundImage: `url(${this.props.url_image})`
//           }}
//         ></section>
//         <div id="modal-edit" class="modal">
//           <div class="modal-content">
//             <div className="right-modal-close close"></div>
//             <h6>Edit Book</h6>
//             <div className="row">
//               <form className="col s12">
//                 <div className="input-field col s12">
//                   <i class="tiny material-icons prefix">code</i>
//                   <input
//                     placeholder="img.jpg"
//                     id="url_image"
//                     type="text"
//                     class="validate"
//                   />
//                   <label for="url_image">Url Image</label>
//                 </div>
//                 <div className="input-field col s12">
//                   <i class="tiny material-icons prefix">title</i>
//                   <input
//                     placeholder="The Hunger Games"
//                     id="url_image"
//                     type="text"
//                     class="validate"
//                   />
//                   <label for="title">Title</label>
//                 </div>
//                 <div className="input-field col s12">
//                   <i className="tiny material-icons prefix ">description</i>
//                   <input
//                     placeholder="The hunger games is...."
//                     id="description"
//                     type="text"
//                     class="validate"
//                   />
//                   <label for="description">Description</label>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div class="modal-footer">
//             <a
//               href="#!"
//               class="modal-close waves-effect waves-light btn yellow darken-4"
//             >
//               Save
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default DetailNav;