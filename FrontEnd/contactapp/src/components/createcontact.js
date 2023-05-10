
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addContact } from '../actions/contactAction';



export default function CreateContact() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [contact, setContact] = useState({
        ContactID: "",
        FirstName: "",
        LastName: "",
        Status: false
    });



    const { ContactID, FirstName, LastName, Status } = JSON.stringify(contact);
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
      
        debugger;
        setContact({ ...contact, [name]: value })
       
        console.log(name,value);
    }

    const AddContact = async () => {
       
        try {
            let res = await dispatch(addContact(contact))
            debugger;
            if (res.status === 200) {
                debugger;
                navigate("/")
            }
            else {
                alert(res.response.data.message);
            }
        }
        catch (err) {
            console.log(err.data);
            navigate("/")
        }
    }

    return (
        <div style={{ marginTop: '100px', marginLeft: '350px' }} >
            <button className="rounded-full bg-black text-white h-12 w-40 text-center float-right my-100" onClick={() => navigate('/')}> Go to Listing</button>
            <article className="overflow-hidden rounded-lg shadow-lg" style={{ width: '50%' }}>
                <form className="w-full max-w-sm m-5">
                <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-ContactID">
                                ContactID
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="number" name="ContactID" value={ContactID} onChange={handleChange}>
                            </input>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                First Name
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="FirstName" value={FirstName} onChange={handleChange}>
                            </input>
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-last-name" type="text" name="LastName" value={LastName}>
                                Last Name
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="lastName" type="text" name="LastName" value={LastName} onChange={handleChange}>

                            </input>
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-last-name" type="text" >
                                Status
                            </label>
                        </div>
                        <div class="flex justify-center">
                            <input type="radio" id="active" name="Status" value={true} onChange={handleChange} />
                            <label className="m-3" for="html">Active</label><br />
                            <input type="radio" id="inactive" name="Status" value={false} onChange={handleChange} />
                            <label className="m-3" for="css">InActive</label><br />
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <button onClick={AddContact} className="rounded-full bg-black text-white h-12 w-40 text-center my-100">
                                Save Contact
                            </button>
                        </div>
                    </div>
                </form>
            </article>
        </div>
    );
}
