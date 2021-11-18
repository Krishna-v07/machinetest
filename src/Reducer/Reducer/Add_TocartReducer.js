import {ErrorAddtocart,RequestAddtocart,SuccessAddtocart} from '../Type/AddtocartType';

const initialState={
    Loading:false,
    data:[],
    Error:"",
}

const AddTocartRedux=(state=initialState,action)=>{
    switch(action.type){
        case RequestAddtocart:return {...state,Loading:true}
        case SuccessAddtocart:return{Loading:false,data:action.payload,error:''}
        case ErrorAddtocart:return {Loading:false,error:action.payload,data:[]}         
        default: return state
    }
}

export default AddTocartRedux;