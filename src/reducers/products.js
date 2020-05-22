import * as types from "./../constants/ActionTypes";
import _, { findIndex } from "lodash";
var initialState = [];

const products = (state = initialState, action) => {
  var index = -1;
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case types.DELETE_PRODUCT:
      console.log("before:" + JSON.stringify(state));
      // action.id khớp với state
      // nhưng vẫn trả index về -1  
      index = findIndex(state, ['id',action.id]);
      console.log(action,'acttion')
      console.log(index,'index');
      _.remove(state,function(item){
        return item.id==action.id
      })
      // tim va remove cac item co id = action.id trong state


      return [...state];
    case types.ADD_PRODUCT:
      state.push(action.product);
      return [...state];
    default:
      return [...state];
  }
};
export default products;
