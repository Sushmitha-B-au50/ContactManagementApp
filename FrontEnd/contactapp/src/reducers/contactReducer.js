import * as types from "../actions/actionType"

const initialState = {
    contacts:[],
    contact:[],
    loading:true,
    error:null,
}

export const  contactReducer = (state = initialState,action) =>
{
    switch (action.type) {
      case types.GET_CONT:
        return{
            ...state,
            loading:false,
            contacts:action.payload,
        }
        case types.CONT_ADD:
            return{
                ...state,
                loading:false,
                contacts:action.payload,
            }
        case types.CONT_DELETE:
            return{
                ...state,
                loading:false,
                contacts:action.payload,
            }
        default:
            return state;
    }     

}
