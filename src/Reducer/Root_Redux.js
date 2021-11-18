import { combineReducers } from "redux";  
import AddTocartRedux from "./Reducer/Add_TocartReducer";

const Rootreducer = combineReducers({ 
    Addtocart:AddTocartRedux,    
})

export default Rootreducer;