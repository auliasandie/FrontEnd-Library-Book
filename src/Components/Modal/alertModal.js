import React from 'react';
import { Link } from 'react-router-dom';

const AlertModal = props => {
  return (
    <div id='modalAlert' className='modal modal-alert'>
      <div className='modal-content alert'>
        <h4 align='center'>Delete Success! </h4>
        <p align='center'>Delete Success! {props.title}</p>
      </div>
      <div className='modal-footer'>
        <Link to={props.to} className='modal-close btn'>
          Ok
        </Link>
      </div>
    </div>
  );
};

export default AlertModal;