import React from 'react';

const DropDownItems = props => {
  console.log(props)
  return (
    <ul id={props.id} className='dropdown-content'>
      {props.children}
    </ul>
  );
};

export default DropDownItems;