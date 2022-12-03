const initialState = {
  product: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_Basket":
      return (state = {
        ...state,

        product: [...state.product, action.payload],
      });
    default:
      return state;
  }
};

export { initialState, reducer };
