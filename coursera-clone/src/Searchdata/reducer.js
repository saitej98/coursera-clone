import { LOADING_DATA } from "./action";
let initStore = {
  loading: false,
};
export const reducer = (store = initStore, { type, payload }) => {
  // console.log(store)
  switch (type) {
    case LOADING_DATA:
      return { ...store, loading: payload };
    default:
      return store;
  }
};
