import React, {useState}  from 'react';
import axios from 'axios'
// const initialFormState = { id: null, name: '', username: '' }




const Modal = props => {

  // const token = localStorage.getItem("id_token");
  // let userProfile ;
  // if (token) {
  //   userProfile = decode(token);
   
  // }
  const initialFormState = { 
      image_url: '', title: '', 
      author: '', id_genre : '', id_year: '' , 
      id_status: '', description: ''}

  const [book, setBook] = useState(initialFormState)

  const onChangeTitle = event => {
    const {value} = event.target
    
      setBook({ ...book, title: value })
      // setBook({ title : value})
      console.log(book.title)
      console.log(book)
    }
  
  const onChangeIU = event => {
    const { value } = event.target
    
      // setBook({ ...title, [title]: value })
      setBook({...book, image_url : value})
    }
  const onChangeA = event => {
    const { value } = event.target
    
      // setBook({ ...title, [title]: value })
      setBook({...book, author : value})
    }
  const onChangeG = event => {
    const { value } = event.target
    
      // setBook({ ...title, [title]: value })
      setBook({...book, id_genre : value})
    }
  const onChangeBY = event => {
    const { value } = event.target
    
      // setBook({ ...title, [title]: value })
      setBook({...book, id_year : value})
    }
  const onChangeBS = event => {
    const { value } = event.target
    
      // setBook({ ...title, [title]: value })
      setBook({...book, id_status : value})
    }
  const onChangeD = event => {
    const { value } = event.target
    
      // setBook({ ...title, [title]: value })
      setBook({...book, description : value})
    }
  
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(book)
    axios.post('http://localhost:8000/api/library/create', book)
        .then(function(response) {
          window.location.href="/"; 
        });

  }
  
  const { modalId, modalTitle} = props;
  return (
    <div id={modalId} className='modal modal-books'>
      <div className='modal-content'>
        <h4>{modalTitle}</h4>
        <div className='row'>
          <form onSubmit={onSubmit}>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>image</i>
              <input name='image_url'
              id="image_url" type='text' className='validate' placeholder='Add Url Image' value={book.image_url} onChange={onChangeIU}/>
              <label className='active' htmlFor ='image_url'>Image Url</label>
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>menu_books</i>
              <input name="title" type='text' className='validate' placeholder="Add Title" value={book.title} onChange={onChangeTitle}/>
              <label className='active' htmlFor='title'>Title</label>
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>account_box</i>
              <input name='author' type='text' className='validate' placeholder="Who's the author?" value={book.author} onChange={onChangeA}/>
              <label className='active' htmlFor ="author">Author</label>
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>book</i>
              <select value={book.id_genre} onChange={onChangeG}>
              <option value="0">Choose Genre</option>
                <option value="1">Thriller</option>
                <option value="2">Horror</option>
                <option value="3">Romance</option>
                <option value="4">Fiction</option>
                <option value="5">Fantasy</option>
                <option value="6">Poetry</option>
                <option value="7">Education</option>
                <option value="8">Comics</option>
                <option value="9">Biography</option>
                <option value="10">Adventure</option>
              </select>
            
            <label className='active' htmlFor="genre">Genre</label>
            </div>

            <div className='input-field col m12'>
              <i className='material-icons prefix'>date_range</i>
              <select value={book.id_year} onChange={onChangeBY}>
              <option value="0">Choose Year</option>
              <option value="1">2012</option>
              <option value="2">2013</option>
              <option value="3">2014</option>
              <option value="4">2015</option>
              <option value="5">2016</option>
              <option value="6">2017</option>
              <option value="7">2018</option>
              <option value="8">2019</option>
            </select>              
            <label for='book_year' htmlFor="book_year">Book Year</label>
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>event_available</i>
              <select value={book.id_status} onChange={onChangeBS}>
              <option value="0">Book Status</option>
              <option value="1">Available</option>
              <option value="2">Not Available</option>
            </select>              
            <label for='book_status' htmlFor="book_status">Book Status</label>
            </div>
            <div className='input-field col m12'>
              <i className='material-icons prefix'>description</i>
              <textarea
                name="description"
                id="description"
                type='text'
                className='materialize-textarea'
                placeholder="Description"
                value={book.description}
                onChange={onChangeD}
              />
              <label className="active" htmlFor='description'>Description</label>
            </div>
            <input type="submit" value="Save" />

          </form>
        </div>
      </div>
      <div className='modal-footer'>
      {/* <button 
      type='submit'
      className='modal-close btn-flat yellow'>
          Save
          </button> */}
      </div>
    </div>
  );
};

export default Modal;