
<<<<<<< HEAD
// Initial state
=======
///// Initial state
>>>>>>> 355c98f35760ff38ea57e6cbee3e49ec99aba5ca
const initialState = {
    loggedInUser: null,
  };
  
<<<<<<< HEAD
  // Reducer function
=======
  ////// Reducer function
>>>>>>> 355c98f35760ff38ea57e6cbee3e49ec99aba5ca
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOGGED_IN_USER':
        return {
          ...state,
          loggedInUser: action.payload,
        };
      default:
        return state;
    }
  };
  
<<<<<<< HEAD
  // Actions
=======
  ///// Actions
>>>>>>> 355c98f35760ff38ea57e6cbee3e49ec99aba5ca
  export const setLoggedInUser = (user) => ({
    type: 'SET_LOGGED_IN_USER',
    payload: user,
  });
  
  export default userReducer;