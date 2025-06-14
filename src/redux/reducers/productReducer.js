import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state ={}, {type,payload})=>{
  switch(type){
    case ActionTypes.SELECTED_PRODUCTS:
      return{...state,...payload};
      default:
       return state;
  }
}