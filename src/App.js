import {NavBar} from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import { Profile } from './components/Profile';
import {Browser, BrowserRouter, Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {style} from './style.css'
function App() {
  return (
    <div>
      <BrowserRouter>
      <h1>
        <Link className='logo' to="/">SweetSite</Link>
      </h1>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Empieza a comprar!"/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/> 
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

