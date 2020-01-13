webpackHotUpdate("main",{

/***/ "./src/Components/Pages/Details.js":
/*!*****************************************!*\
  !*** ./src/Components/Pages/Details.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_mac_ReactJS_new_library_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DetailNav_DetailNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DetailNav/DetailNav */ "./src/Components/DetailNav/DetailNav.js");
/* harmony import */ var _DetailNav_FloatingCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DetailNav/FloatingCard */ "./src/Components/DetailNav/FloatingCard.js");
/* harmony import */ var _ContainerDetail_ContainerDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ContainerDetail/ContainerDetail */ "./src/Components/ContainerDetail/ContainerDetail.js");
/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Modal/Modal */ "./src/Components/Modal/Modal.js");
/* harmony import */ var _Helpers_books__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Helpers/books */ "./src/Components/Helpers/books.js");
/* harmony import */ var _Helpers_books__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Helpers_books__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/mac/ReactJS/new-library/src/Components/Pages/Details.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_mac_ReactJS_new_library_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









class Details extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    this.handleChange = e => {
      const _e$target = e.target,
            name = _e$target.name,
            value = _e$target.value;
      this.setState({
        detail: _objectSpread({}, this.state.detail, {
          [name]: value
        })
      });
    };

    this.onClick = e => {
      e.preventDefault();
      const _this$state$detail = this.state.detail,
            title = _this$state$detail.title,
            author = _this$state$detail.author,
            image_url = _this$state$detail.image_url,
            book_year = _this$state$detail.book_year,
            book_status = _this$state$detail.book_status,
            description = _this$state$detail.description,
            genre = _this$state$detail.genre;
      const newBook = {
        title,
        author,
        image_url,
        book_year,
        book_status,
        description,
        genre
      };
      const id_book = this.props.match.params.id_book;
      const tempArray = this.state.book.slice();
      tempArray[id_book] = newBook;
      this.setState({
        books: tempArray,
        isEdit: true
      });
    };

    this.deleteHandler = () => {
      const id_book = this.props.match.params.id_book;
      const tempArray = this.state.book.slice();
      tempArray.splice(id_book, 1);
      this.setState({
        books: tempArray
      });
    };

    this.state = {
      book: [],
      id: 0,
      detail: {
        title: '',
        description: '',
        image_url: '',
        author: '',
        book_year: '',
        book_status: '',
        genre: ''
      },
      isEdit: false,
      isDelete: false
    };
  }

  componentDidMount() {
    materialize_css__WEBPACK_IMPORTED_MODULE_2___default.a.AutoInit();

    if (this.props.match.params) {
      const id_book = this.props.match.params.id_book;
      const book = this.props.location.state.book;
      console.log({
        book: book
      });
      this.setState({
        book,
        id: id_book,
        detail: book[id_book]
      });
    }
  }

  render() {
    console.log({
      newBook: this.state.book
    });
    console.log({
      isDelete: this.state.isDelete
    });
    console.log({
      isEdit: this.state.isEdit
    });
    const _this$state$detail2 = this.state.detail,
          title = _this$state$detail2.title,
          author = _this$state$detail2.author,
          book_year = _this$state$detail2.book_year,
          book_status = _this$state$detail2.book_status,
          image_url = _this$state$detail2.image_url,
          genre = _this$state$detail2.genre,
          description = _this$state$detail2.description;
    const btnStatus = book_status === 'Available' ? '' : 'Disabled';
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "top-cover",
      style: {
        backgroundImage: "url('".concat(image_url, "')")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DetailNav_DetailNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: this.deleteHandler,
      to: {
        pathname: '/',
        state: {
          newBook: this.state.book,
          isEdit: this.state.isEdit
        }
      },
      index: this.state.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DetailNav_FloatingCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      image_url: image_url,
      alt: title.trim(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn-large ".concat(btnStatus, " z-depth-3 right btn-borrow"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "Borrow ")));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "top-cover",
      style: {
        backgroundImage: "url('".concat(this.state.detail.image_url, "')"),
        backgroundSize: "cover",
        width: "100%",
        height: "350px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DetailNav_DetailNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
      alert: this.props.match.params.index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DetailNav_FloatingCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      image_url: this.state.detail.image_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn-large z-depth-3 right btn-borrow",
      style: {
        marginLeft: "187px",
        marginTop: "362px",
        marginRight: "-167px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, "Borrow")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col m8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContainerDetail_ContainerDetail__WEBPACK_IMPORTED_MODULE_5__["default"], {
      description: this.state.detail.description,
      title: this.state.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "fixed-action-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      className: "btn-floating btn-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "large material-icons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, "add"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ })

})
//# sourceMappingURL=main.6a84cc6d90d4af31e372.hot-update.js.map