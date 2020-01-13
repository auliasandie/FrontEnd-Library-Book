import Axios from 'axios';

export const addWishlist = (data) => {
    return {
        type : "POST_WISHLIST",
        payload : Axios.post("http://localhost:8000/addwishlist", data)
    }
}

export const deleteWishlist = (data) => {
    return {
        type: "DELETE_WISHLIST",
        payload: Axios.delete("http://localhost:8000/deletewishlist/:id_book", data)
    }
}