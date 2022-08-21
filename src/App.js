import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Landing from "./pages/Landing";
import ProductDetails from "./pages/products/ProductDetails";
import Products from "./pages/products/Products";

function App() {
  return (
      <Router>
        <Nav />
      <Routes>
        <Route path='/' element={<Landing />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='/products' element={<Products />} ></Route>
        <Route path='/products/:id' element={<ProductDetails />} ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
