import React  from 'react';
import Divider from "@material-ui/core/Divider";
import decode from 'jwt-decode';
import swal from "sweetalert";
import { connect } from "react-redux";
import {addWishlist} from "../Public/action/wishlist";
import { Sidenav } from 'materialize-css';

const SideNav = (props) => {

  const token = localStorage.getItem("id_token");
  let userProfile, name, level;
  if (token) {
    userProfile = decode(token);
    level = userProfile.id_level;
    name = userProfile.fullname;
    // email= userProfile.response.email;
  }

  // const handleWishlist=(e)=>{
  //   const { id } = this.props.match.params;
  //   e.preventDefault();
  //   if (!localStorage.jwt) {
  //     swal(`You didn't have account !
  //   Please create your account`).then(() => {
  //       window.location.href = "/";
  //     });
  //   } else {
  //     swal({
  //       title: "Are you sure?",
  //       text: `      PLEASE KLIK OK TO CONTINUE !
  //     `,
  //       icon: "warning",
  //       buttons: true,
  //       dangerMode: true
  //     }).then(async klikOk => {
  //       if (klikOk) {
  //         const data = {
  //             id: this.state.id,
  //             id_book:this.props.match.params.id
  //                          }
  //           console.log('ini data',data)
  //         await this.props.dispatch(addWishlist(data)).then(()=>{
  //           swal("Success Add to Your Wishlist");

  //         })
        
  //       } else {
  //         swal("Your imaginary file is safe!");
          
  //       }
      
  //     })
  //   }}
  

  return (
    <ul id='slide-out' className='sidenav'>
      <li>
        <div className='center black white-text' style={{ marginTop: '0px' }}>
          <img
            src='https://i1.sndcdn.com/avatars-000689513420-uf8vyh-t500x500.jpg'
            alt='Rex Orange County'
            height='100'
            width='100'
            className='circle'
          />
          { token ? (<h5>{name}</h5>): (<h5> Hi Guest</h5>)}
      
          <Divider />
        </div>
        <br></br>
      </li>
      <li>
        <a href='#' style={{fontSize: '15px', align:'center'}}>
          <i className='material-icons'>explore</i>Explore
        </a>
      </li>
      <li>
      <a href='#' style={{fontSize: '15px', textAlign:'auto'}}>
          <i className='material-icons'>love</i>Wishlist
        </a>
      {/* <button
             
             className="wishlist black-text btn yellow"
             data-target="wishlist_modal"
             style={{marginLeft:'250px'}}
           >
             Wishlist
           </button> */}
      </li>
      <li>
        <a href='#' style={{fontSize: '15px', textAlign:'auto'}}>
          <i className='material-icons'>history</i>History
        </a>
      </li>
      <li>
        {level == 1 ? (<a href='#' style={{fontSize: '15px', align:'center'}} data-target='addNovelModal' className='modal-trigger'>
          <i className='material-icons'>books</i>Add Book
        </a>) : ""}
        
      </li>
        
    </ul>
  );
      }

// export default SideNav;
const mapStateToProps = state => {
  return {
    data: state.getByID,
    editBooks: state.putBook,
    deleteBooks: state.deleteBook,
    updateStatus: state.updateStatus //namaProps : state.nama file di reducer folder yang di import dari index.js
  };
};
export default connect(mapStateToProps)(SideNav); 