import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { SingleProduct } from './components/SingleProduct';
import { MainLAyout } from './layout/MainLAyout';
import { Products } from './components/Products';
import { UsersInfo } from './components/UsersInfo';
import { Cards } from './components/Cards';
import { Users } from './components/Users';
// import { Routs } from './components/Routs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Routs/> */}
      <MainLAyout/>
      <Routes>
        {/* <Route path='/' element={<MainLAyout/>}/> */}
        <Route path='products' element={<Products/>}/>
        <Route path='singleProduct/:id' element={<SingleProduct/>}/>
        <Route path='cards' element={<Cards/>}/>
        <Route path='users' element={<Users/>}/>
        <Route path='usersInfo' element={<UsersInfo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
