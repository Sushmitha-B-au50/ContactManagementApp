import {deleteContact} from '../actions/contactAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadContacts } from '../actions/contactAction';


export default function Card(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

const removeContact =(id) =>
{
   dispatch(deleteContact(id))
    navigate('/')
}

    return (
      <>
        <div dir="ltr">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <article class="overflow-hidden rounded-lg shadow-lg" style={{ width: '18rem', margin: '20px' }}>
                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                            <div class="my-4">
                            <span class="font-light me-3">First Name</span>
                            <span class="font-bold text-base">{props.contact.FirstName}</span>
                           </div>
                           <div class="my-4">
                            <span class="font-light me-3">Last Name</span>
                            <span class="font-bold text-base">{props.contact.LastName}</span>
                           </div>
                           <div class="my-4">
                            <span class="font-light me-3">Status</span>
                            <span class="font-bold text-base">{props.contact.Status ? 'Active' : 'InActive'}</span>
                           </div>
                            </h1>
                        </header>
                        <footer class="flex items-center justify-between leading-none p-2 md:p-2 ">
                            <button class="rounded-full bg-black text-white h-12 w-40 m-2" onClick={() => navigate(`/updateContact/${props.contact.ContactID}`)}>Edit</button>
                            <button class="rounded-full bg-black text-white h-12 w-40" onClick={()=>removeContact(props.contact.ContactID) }>Delete</button>
                        </footer>
                    </article>
                </div>
            </div>
            </div>
      </>
    )
}


