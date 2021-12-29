import { actionContraint } from "./actionType";

const initialState = {
  product: [],
  isLoading: false,
  isError: false,
  itemBag: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionContraint.GET_PRODUCT_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case actionContraint.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        product: action.payload.product
      };
    }
    case actionContraint.GET_PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
    case actionContraint.ADD_ITEM: {
      return { state };
    }
    default: {
      return state;
    }
  }
}
