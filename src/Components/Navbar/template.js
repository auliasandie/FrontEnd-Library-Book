import React, { Component } from 'react';
import SideNav from './Sidenav';
import DropDownItems from './Dropdown';
import NavbarContent from './NavbarContent';
import './Navbar.css';
import categories from '../Helpers/categories';
import allTimes from '../Helpers/times';
import axios from 'axios';

class NaviBar extends Component {
    constructor(){
      super()
      this.state = {
        categories: {}
      }
     }
     componentDidMount() {
      axios.get('http://localhost:8000/api/library/genre')
          .then(response => {
            console.log(response.data)
            this.setState({ categories: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
        }
        
        render () {
          let DropdownCat
          if (this.state.categories.length > 0 ) 
          {
          DropdownCat =  this.state.categories.map((cat, index) => {
            return (
              <li key={index}>
                <a href={'/api/library/genre/' + cat.id_genre}>{cat.genre}</a>
              </li>
              
            )
            })
          }
         
          return( 
             <nav>
             <SideNav/>
              <DropDownItems key="1" id='all-categories'> {DropdownCat} </DropDownItems>
              </nav>  
          )
        }
      } 
  export default NaviBar;