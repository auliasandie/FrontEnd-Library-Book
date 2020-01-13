import React from 'react';
import { textAlign } from '@material-ui/system';

const ContainerDetail = props => {
  const {description, title, book_year, book_status, index, genre} = props;
  
  const color = 
    book_status === 'Available' ? 'light-green-text text accent-4' : 'red-text';

  return (
    <div className='left detail-container'>
      <h5 className={`right ${color} text-status`}>{book_status}</h5>
      <a className='btn z-depth-0' href={`${index}#`}>
        {genre}
        </a>
      <h4>{title}</h4>
      <span style={{fontWeight: 'bold'}}>{book_year}</span>
      <p style={{
        marginTop: '20px',
        textAlign: 'justify'
      }}        
      dangerouslySetInnerHTML={{__html: description}}>

      </p>

    </div>
  );
};

export default ContainerDetail;





// import React from 'react';

// const ContainerDetail = props => {
//   const { desc, title } = props;
//   return (
//     <div className='left detail-container'>
//       <h5 className='right light-green-text text-accent-4 text-status'>
//         Available
//       </h5>
//       <a className='btn z-depth-0'>Fiction</a>
//       <h4>{title}</h4>
//       <span style={{ fontWeight: 'bold' }}>Juni 2019</span>
//       <p
//         style={{
//           marginTop: '20px'
//         }}>
//         {desc}
//       </p>
//     </div>
//   );
// };

// export default ContainerDetail;