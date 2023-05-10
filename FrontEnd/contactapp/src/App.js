
import './App.css';
import Header from './components/navbar';
import SideBar from './components/sidebar';
import ContactList from './components/ContactList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CreateContact from './components/createcontact';
import UpdateContact from './components/editContact';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <div>
          <Header/>
        <Routes>
          <Route path="/" element={[<SideBar/> ,<ContactList/>]} />
          <Route path="/crtContact" element={[<SideBar/>,<CreateContact/>]}/>
          <Route path="/updateContact/:id" element={[<SideBar/>,<UpdateContact/>]} />
          UpdateContact
        </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;

