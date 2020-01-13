import React, { Component } from "react";
import axios from "axios";
import NaviBar from "../Navbar/Navbar";
import Carousel from "../carousel/Carousel";
import Cards from "../card/Card";
// import books from '../Helpers/books';
import Modal from "../Modal/Modal";
//import { Link } from 'react-router-dom';

import M from "materialize-css";
//import { timingSafeEqual } from 'crypto';
import { connect } from "react-redux";
import { getBook } from "../Public/action/book";
import Pagination from "./Pagination";
import Register from '../Modal/Register';
import Login from '../Modal/Login';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      currentPage: 1,
      postsPerPage: 3
    };
  }

  async componentDidMount() {
    M.AutoInit();

    const elems = document.querySelectorAll(".carousel");
    const options = {
      duration: 100
    };
    M.Carousel.init(elems, options);
    // let axiosConfig = {
    //   headers: {
    //     "Content-Type": "application/json;charset=UTF-8",
    //     "Access-Control-Allow-Origin": "*",
    //     "X-Requested-With": "XMLHttpRequest"
    //   }
    // };
    // // axios.get('http://127.0.0.1:8000/api/library')
    //     .then(response => {
    //       console.log(response.data)
    //       this.setState({ book: response.data });
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     })
    await this.props.dispatch(getBook());
    //.then setelah kurung tutup biru
    // const {pokemonData} = await this.props.pokemons;
    this.setState({
      book: this.props.getData.bookFile
    });
  }

  render() {
    const indexOflastpost = this.state.currentPage * this.state.postsPerPage;
    const indexOffirstPost = indexOflastpost - this.state.postsPerPage;
    const currentPost = this.state.book.slice(
      indexOffirstPost,
      indexOflastpost
    );
    console.log(currentPost);
    console.log(this.state.book);

    let CardMapping;
    if (this.state.book.length > 0) {
      CardMapping = currentPost.map((b, index) => {
        return (
          <Cards
            alt={b.title.trim()}
            to={{
              pathname: `details/${b.id_book}`,
              state: {
                book: this.state.book.filter(id => id.id_book === b.id_book)
              }
            }}
            key={index}
            title={b.title}
            img={b.image_url}
            description={b.description}
          />
        );
      });
    }

    return (
      <div className="home-page">
        <Modal modalId="addNovelModal" modalTitle="Add Book" style={{fontSize: 10}}></Modal>
        <NaviBar />
        <Register />
        <Login />
        <Carousel />
        <div className="container">
          <h4
            style={{
              marginBottom: "30px",
              paddingLeft: "10px",
              fontSize: "25px"
            }}
          >
            List Books
          </h4>
          <div key="1" className="row">
            {CardMapping}
          </div>
          <Pagination
            totalPosts={this.state.book.length}
            postsPerPage={this.state.postsPerPage}
            paginate={pgnum => this.setState({ currentPage: pgnum })}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    getData: state.book // namaProps: state.namaReducer
  };
};

export default connect(mapStateToProps)(Home);
