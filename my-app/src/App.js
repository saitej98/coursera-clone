import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';

import { FooterComponent } from './Components/FooterComponent';
import { SearchPage } from './Components/SearchPage';
import { SubFooterComponent } from './Components/Subfooter';

function App() {
  return (
    <Routes>
      <Route path='/' element={   
        <><Navbar/>
         <SubFooterComponent/>
        <FooterComponent/></> }></Route>
        <Route path='/search/:name' element={
        <>
        <Navbar/>
        <SearchPage/>
        <SubFooterComponent/>
        <FooterComponent/>
        </>
        }></Route>
    </Routes>
    
  );
}

export default App;
