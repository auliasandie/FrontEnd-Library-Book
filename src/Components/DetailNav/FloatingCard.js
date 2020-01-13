import React from 'react';

const FloatingCard = props => {
  return (
    <div className='card hoverable right z-depth-9 detail-card-right' style={{borderRadius:"31px", width:"200px", marginRight:"5rem", marginTop:"10rem" }}>
       <div className="card-image">
        <img src={props.image_url} style={{ borderRadius: '30px' }} />
      </div>
       </div>
  );
};
export default FloatingCard;