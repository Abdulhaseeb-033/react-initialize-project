
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import About from "../pages/About";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PageNotFound from "../pages/PageNotFound";
import Footer from "../components/Footer";


function Layout() {
  const location = useLocation();

  const hide =  location.pathname.startsWith("/signup");
  return (
    <>
      {!hide && <Navbar />}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/signup' element={<Signup/>}>
          <Route index element={<Login/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>

        <Route path='*' element={<PageNotFound/>}/>
      </Routes>

      {!hide && <Footer />}
    </>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}