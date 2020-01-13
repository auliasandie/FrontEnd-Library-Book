import React, { Component } from "react";
import M from 'materialize-css';
import DetailNav from "../DetailNav/DetailNav";
import FloatingCard from "../DetailNav/FloatingCard";
import ContainerDetail from "../ContainerDetail/ContainerDetail";
import ModalUpdate from '../Modal/ModalUpdate';
import AlertModal from '../Modal/alertModal';
import axios from 'axios';
import swal from 'sweetalert';
import decode from'jwt-decode';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      id: props.match.params.id_book,
      detail: this.props.location.state.id_book,
    isEdit: false,
    isDelete: false
  
  };
}
//jika paramsnya ada dia bakal inisialisasi  props dan state di bawah

  componentDidMount() {
    M.AutoInit();
    console.log(this.props)
    if (this.props.match.params) {
    const {id_book} = this.props.match.params;
    const {book} = this.props.location.state.book;
    console.log (book);

    this.setState({
      book : this.props.location.state.book[0],
      id: id_book,
      detail: this.props.location.state.book[0]
    });
    }
  }
// componentWillReceiveProps(nextProps) {
//   const {id_book} = nextProps.match.params;
//     const {book} = nextProps.location.state.book;
// }


  handleChange = e => {
    const {name, value} = e.target;

    this.setState({
      detail: {...this.state.detail, [name]:value}
    });
  };

  onClick = e => {
    e.preventDefault();
    const {
      title,
      author,
      image_url,
      id_year,
      id_status,
      description,
      id_genre
    } = this.state.detail;

  
    const newBook = {
      title,
      author,
      image_url,
      id_year,
      id_status,
      description,
      id_genre
    }; 
    const {id_book} = this.props.match.params;
    const tempArray = this.state.book.slice();
    tempArray[id_book] = newBook;

    this.setState({
      books: tempArray,
      isEdit: true
    });
  };

  deleteHandler = (e) => {
    e.preventDefault();
    const {id_book} = this.props.match.params;
    swal({
      title: "are you sure?",
      text: "once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    })
    .then(willDelete => {
      if (willDelete) {
        axios.delete(`http://localhost:8000/api/library/delete/${id_book}`
        ).then(()=> {
          swal("Your Book File has been deleted!",{
            icon: "success"
          }).then(function(response) {
            window.location.href="/"; 
          });
        });
      } else {
        swal("Your Book File is safe!");
      }
      })
  
    
    
    
    // .then (() => window.location.href='/')
    // const tempArray = this.state.book.slice();
    // tempArray.splice(id_book, 1);
    // this.setState({
    //   books: tempArray
    // });
    };

  

  render() {

  const token = localStorage.getItem("id_token");
  let userProfile, level;
  if (token) {
    userProfile = decode(token);
    level = userProfile.id_level;
  }
    // email= userProfile.response.email;
  


    console.log(this.props)
    console.log({newBook: this.state.book});
    console.log({ isDelete: this.state.isDelete});
    console.log({ isEdit: this.state.isEdit});
    console.log(this.state.detail)


    const {
      id_book,
      title,
      author,
      id_year,
      id_status,
      image_url,
      id_genre,
      book_year,
      book_status,
      genre,
      description
    } = this.state.book//state.detail != null ? this.state.detail : null;


    console.log(this.props.location.state.book)

    const btnStatus = book_status === 'Available' ? ('') : 'disabled';

   
   
  
    return (
      <div key="2">
        <div className='top-cover'
        style={{
          backgroundImage: `url(${image_url})`, 
          backgroundSize:'cover',
          width:'100%',
          height:'500px'
        }}>
        <DetailNav
        key="4"
        onDelete={this.deleteHandler}
        to={{
          pathname:'/',
          state : {
            newBook: this.state.book,
            isEdit: this.state.isEdit
          }
        }}
        index={this.state.id}
        /> 
        <FloatingCard key="5" image_url={image_url} />
        {level == 2 ? (<button className={`btn-large ${btnStatus} z-depth-3 right btn-borrow`} style={{marginLeft:"187px",
    marginTop:"32rem",
    marginRight: "-78px", 
    zIndex:"10"}}>
    Borrow </button>) :" "}
    {level == 2 ? (<button className={`btn-large ${btnStatus} z-depth-3 right btn-borrow`} style={{marginLeft:"187px",
    marginTop:"32rem",
    marginRight: "-78px", 
    zIndex:"10"}}>Add to Wishlist! </button>) :" "}
        </div>
        <AlertModal
        title={title}
        to={{
          pathname: '/',
          state: {
            newBook: this.state.book,
            isDelete: true
          }
        }}
        />
      <ModalUpdate
      modalTitle='Edit Book'
      modalId='editBook'
      id_book={this.props.match.params.id_book}
      id_genre={id_genre}
      title={title}
      author={author}
      image_url={image_url}
      genre={genre}
      id_year={id_year}
      id_status={id_status}
      genre={id_genre}
      description={description}
      onChange={this.handleChange}
      onSubmit={this.onClick}
      />
      <div className='container'>
          <ContainerDetail
      index={this.state.id}
      description={description}
      title={title}
      book_year={book_year}
      book_status={book_status}
      genre={genre}
      />
          </div>
  
      {/* <div className='fixed-action-btn'>
        <button className={`btn-floating btn-large ${btnStatus}`}>
          <i className='large material-icons'>add</i>
        </button>
      </div> */}
      </div>
  
    );
  }
}

export default Details; 

