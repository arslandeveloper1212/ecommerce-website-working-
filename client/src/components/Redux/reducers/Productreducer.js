const products = []


export const getProductreducer =(state={products},action)=>{
switch(action.type){
    case "SUCCESS_GET_PRODUCTS":
    return {products: action.payload}
    case "FAILED_GET_PRODUCTS":
        return {products:action.payload}
        default : return state
}
}