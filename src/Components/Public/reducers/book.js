const initState = {
  bookFile: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

export const book = {
  getBook: (prevState = initState, action) => {
    switch (action.type) {
      case "GET_BOOK_PENDING":
        return {
          ...prevState,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "GET_BOOK_REJECTED":
        return {
          ...prevState,
          isLoading: false,
          isRejected: true
        };
      case "GET_BOOK_FULFILLED":
        return {
          ...prevState,
          isLoading: false,
          isFulfilled: true,
          bookFile: action.payload.data
        };

      default:
        return prevState;
    }
  }
};
// export const book = {
//   editBook: (prevState = initState, action) => {
//     switch (action.type) {
//       case "EDIT_BOOK_PENDING":
//         return {
//           ...prevState,
//           isLoading: true,
//           isRejected: false,
//           isFulfilled: false
//         };
//       case "EDIT_BOOK_REJECTED":
//         return {
//           ...prevState,
//           isLoading: false,
//           isRejected: true
//         };
//       case "EDIT_BOOK_FULFILLED":
//         return {
//           ...prevState,
//           isLoading: false,
//           isFulfilled: true,
//           bookFile: action.payload.data
//         };

//       default:
//         return prevState;
//     }
//   },
  
// };

export default book;
