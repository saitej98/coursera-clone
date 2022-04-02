import { SEARCHED_DATA } from "./action";
let initStore={
    data:[]
}
export const reducer=(store=initStore,{type,payload})=>{
    // console.log(store)
    switch (type){
        case SEARCHED_DATA:
            return {...store,data:payload}
            default :
            return store;

    }
}