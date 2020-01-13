const InitialState = {
    statusData : [],
    isLoading : false,
    isRejected: false,
    isFulfilled: false

}

export const addWishlist = (prevState = InitialState, action) => {
    switch (action.type) {
        case "ADD_WISHLIST_PENDING":
            return{
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            }
        case "ADD_WISHLIST_REJECTED":
            return{
                ...prevState,
                isLoading: false,
                isRejected: true,
            }
        case "ADD_WISHLIST_FULFILLED":
            return{
                ...prevState,
                isLoading: false,
                isFulfilled: true,
            statusData: action.payload.data.response
            }
        default:
            return prevState
    }
}

export const deleteWishlist = (prevState=InitialState, action) => {
    switch (action.type) {
        case "DELETE_WISHLIST_PENDING":
            return{
                ...prevState,
                isLoading: false,
                isRejected: false,
                isFulfilled: false

            }
        case "DELETE_WISHLIST_REJECTED":
            return{
                ...prevState,
                isLoading: false,
                isRejected: true,
            }
        case "DELETE_WISHLIST_FULFILLED":
            return{
                isRejected: false,
                isFulfilled: true,
                statusData: action.payload.data.response
            }
            default:
                return prevState
    }
}