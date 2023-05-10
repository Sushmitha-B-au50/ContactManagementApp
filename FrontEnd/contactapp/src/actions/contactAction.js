import * as types from "./actionType";
import {API } from "../API";


const getcontacts = (contacts) =>(
    {
        type:types.GET_CONT,
        payload:contacts,
    });


const Addcontact = (contact) =>(
    {
        type:types.CONT_ADD

    });
const Updatecontact = (contact) =>(
    {
        type:types.CONT_ADD

    });
const Deletecontact = () =>(
    {
        type:types.CONT_DELETE
    });
    


export const loadContacts = () => {
    return async (dispatch) => {
            debugger;
            const response = await API.get('/contacts/');
            dispatch(getcontacts(response.data));
    }
  }

export const addContact=(contact) => async dispatch =>
{
    debugger;
     try{
        const response = await API.post('/contacts/addContact',contact);
        dispatch(Addcontact());
     }
    catch(err){
                return err;
             }
}


export const updateContact=(id,contact) => async dispatch =>
{
    debugger;
     try{
        const response = await API.put(`/contacts/${id}`,contact);
        dispatch(Updatecontact());
        return response;
     }
    catch(err){
                return err;
             }
}

export const deleteContact=(id) => async dispatch =>
{
    debugger;
     try{
        const response = await API.delete(`/contacts/${id}`);
        dispatch(Deletecontact());
        return response;
     }
    catch(err){
                return err;
             }
}

