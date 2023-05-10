
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../actions/contactAction';
import { useNavigate } from 'react-router-dom';
import Card from './card'



export default function ContactList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    debugger;
    useEffect(() => {

        dispatch(loadContacts());
    }, [])
    
    const { contacts } = useSelector((state) => state.contactRed);
    return (
        <>
            <div >
                <div style={{ margin: '80px' }} >
                    <button onClick={() => navigate('/crtContact')} className="rounded-full bg-black text-white h-12 w-40 text-center my-100">
                        Create Contact
                    </button>
                    <div style={{ marginLeft: '220px' }}>
                        <div className="flex container my-12 mx-auto px-4 md:px-12">
                            {contacts && contacts.map((contact, index) => (
                                <Card contact={contact} key={contact.ContactID} />
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};

