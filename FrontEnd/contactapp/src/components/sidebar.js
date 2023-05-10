// sidebar
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex text-center">
                <aside className="flex flex-col items-center bg-black text-gray-700 shadow w-100 h-screen fixed">
                    <div className="h-100 w-35 m-5 flex items-center">
                        <ul className="mt-5">
                            <li>
                                <a  href="/contacts" className="no-underline hover:underline text-white font-bold text-2xl "> Contacts
                                </a>
                            </li>
                            <li className="mt-5">
                                <a href="/contacts" className="no-underline hover:underline text-white font-bold text-2xl "> Charts and Map
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    )
}