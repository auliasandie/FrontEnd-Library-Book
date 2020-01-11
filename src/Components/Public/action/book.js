import axios from 'axios';

export const getBook = () => {
    return {
        type: 'GET_BOOK',
        payload: axios.get('http://localhost:8000/api/library/')
    }
}
// export const editBook = () => {
//     return {
//         type: 'EDIT_BOOK',
//         payload: axios.put(`http://localhost:8000/api/library/edit/${book.id_book}`, book)
//     }
// }