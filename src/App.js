import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Components/Navbar';
import Cart from './Screens/Cart';
import CategorySection from './Screens/Category-section';
import HomeScreen from './Screens/Home-screen';
import ProductDetails from './Screens/Product-details';
import SearchResults from './Screens/Search-results';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/"  element={<HomeScreen />} />
        <Route path="/product-details"  element={<ProductDetails />} />
        <Route path="/search-results"  element={<SearchResults />} />
        <Route path="/category-section"  element={<CategorySection />} />
        <Route path="/cart"  element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
