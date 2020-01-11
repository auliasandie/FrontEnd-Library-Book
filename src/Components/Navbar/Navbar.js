import React, { Component } from 'react';
import axios from 'axios'
import SideNav from './Sidenav';
import DropDownItems from './Dropdown';
import NavbarContent from './NavbarContent';
import './Navbar.css';
import cater from '../Helpers/categories';
import allTimes from '../Helpers/times';


class NaviBar extends Component {

  constructor(){
    super()
    this.state={
      genre: []
    }
  }

  componentDidMount() {
    // M.AutoInit();

  //GET GENRE

    axios.get('http://localhost:8000/api/library/genres')
    .then(response => {
      console.log(response.data)
      // this.setState({ book: response.data });
      this.setState({
        genre: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render () {

  

  return (
    <nav>
      <SideNav />

      <DropDownItems key="1" id='all-categories'>
        {this.state.genre.map((cat, index) => {
          return (
            <li key={index}>
              <a href='#!'>{cat.genre}</a>
            </li>
          );
        })}
      </DropDownItems>
      <DropDownItems id='all-times'>
        {allTimes.map((time, index) => {
          return (
            <li key={index}>
              <a href='#!'>{time}</a>
            </li>
          );
        })}
      </DropDownItems>
      <NavbarContent />
    </nav>
  );
      }
};

export default NaviBar;

