// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist], //when we click button we will add to existing watchlist
      };
    default:
      return state;
  }
};

//will tell us how to store the data
