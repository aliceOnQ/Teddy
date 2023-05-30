import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Teddy from './pages/Teddy'
import Art from './pages/Art'
import Shop from './pages/Shop'
import Product from './pages/Product';
import Category from './pages/Category'
import Author from './pages/Author'

import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider } from 'antd'
import { darkTheme } from './theme';

import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'


function Router() {
  return (
    <ConfigProvider theme={darkTheme} >
      <HelmetProvider context={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="BEAR" element={<Teddy />} >
              <Route path="artcategory/:artcategoryName" element={<Teddy />} />
            </Route>
            <Route path="ART" element={<Art />} />
            <Route path="SHOP" element={<Shop />} />
            <Route path="products">
              <Route path="category/:categoryName" element={<Category />} />
              <Route path="author/:sku" element={<Author />} />
              <Route path="id/:productId" element={<Product />} />
            </Route>
            <Route path="auth">
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ConfigProvider>
  )
}

export default Router;
