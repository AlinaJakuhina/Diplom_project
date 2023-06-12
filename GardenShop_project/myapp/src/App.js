import './App.css';
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ShoppingCartPage from './Pages/ShoppingCartPage/ShoppingCartPage';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import ProductDescrPage from './Pages/ProductDescrPage/ProductDescrPage';
import MobileMenu from './components/MobileMenu/MobileMenu';
import { useState } from 'react';
import Burger from './components/Burger/Burger';



function App() {

  const [ active, setActive ] = useState(false)


  return (
  <div>  
    <div>
    <MobileMenu active={active} setActive={setActive}/>
    <Burger active={active} setActive={setActive}/>
      <Header />

    </div>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/categories' element={<CategoriesPage />} />
      <Route path='/categories/:id' element={<ProductsPage type={'categories'}/>} />
      <Route path='/products/all' element={<ProductsPage type={'all'}/> } />
      <Route path='/products/:id' element={<ProductDescrPage/>}/>
      <Route path='/sales/all' element={<ProductsPage type={'sale'} />}/>
      <Route path ='/cart' element={<ShoppingCartPage/>} />
      <Route path='/*' element={<NotFoundPage />}/>
    </Routes>
    <div>
      <Footer/>
    </div>
   </div> 
  )
}

export default App;
