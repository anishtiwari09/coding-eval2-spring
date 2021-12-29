import { actionContraint } from "./actionType";

export const getRequest = () => ({
  type: actionContraint.GET_PRODUCT_REQUEST,
  payload: {
    isLoading: true
  }
});

export const getSuccess = (product) => ({
  type: actionContraint.GET_PRODUCT_SUCCESS,
  payload: {
    isLoading: true,
    product: product
  }
});
export const getFailure = () => ({
  type: actionContraint.GET_PRODUCT_FAILURE,
  payload: {
    isError: true
  }
});
const addItem = (id, price) => ({
  type: actionContraint.addItem,
  payload: {
    id: id,
    price: price
  }
});
