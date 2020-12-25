
import Axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from "../constants/product";

export const getProducts = () => (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });

  Axios.get('/api/products')
    .then(({ data }) => {
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: err.message
      });
    });
}

export const getProductDetails = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST });

  Axios.get(`/api/product/${id}`)
    .then(({ data }) => {
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data
      })
    })
    .catch(err => {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: err.response && err.response.data.message ? err.response.data.message : err.message
      });
    });
}