import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';

import { FooterComponent } from './Components/FooterComponent';
import { SearchPage } from './Components/SearchPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={   
        <><Navbar/>
        <FooterComponent/></> }></Route>
        <Route path='/search/:name' element={<SearchPage/>}></Route>
    </Routes>
    
  );
}

export default App;
