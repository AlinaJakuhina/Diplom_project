import './App.css';
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ShoppingCartPage from './Pages/ShoppingCartPage/ShoppingCartPage';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import SaleProductPage from './Pages/SaleProductPage/SaleProductPage';
import ProductCard from './Pages/ProductDescrPage/ProductDescrPage';



function App() {
  return (
  <div>  
    <div>
      <Header/>
    </div>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/categories' element={<CategoriesPage />} />
      <Route path='/products' element={<ProductsPage/> } />
      <Route path='/categories/:id' element={<ProductsPage/>} />
      <Route path='/products/:id' element={<ProductCard/>}/>
      <Route path='/sales' element={<SaleProductPage/>}/>
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
