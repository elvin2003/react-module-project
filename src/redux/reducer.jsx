let obj = {
  arr: [],
  inputValue: "",
  favArr: [],
  searchClicked: false
}

function reducer(state = obj, action) {
  switch (action.type) {
    case 'inputChange':
      return state = {
        ...state,
        inputValue: action.load
      };
    case 'fetchData':
      return state = {
        ...state,
        arr: action.load
      }
    case 'Fav':
      let b = state.favArr.filter(
        function (a) {
          return a.imdbID == action.load.imdbID;
        }
      )
      if (b.length == 0) {
        return state = {
          ...state,
          favArr: [...state.favArr, action.load]
        }
      } else {
        return state;
      }
    case 'reset':
      return state = {
        ...state,
        inputValue: "",
        arr: []
      }
    case 'searchClick':
      return state = {
        ...state,
        searchClicked: action.load
      }
    case 'delete':
      let arr = state.favArr.filter(
        function (e) {
          return e.imdbID != action.load;
        }
      )
      return state = {
        ...state,
        favArr: arr
      }
    default:
      return state;
  }
}
export default reducer