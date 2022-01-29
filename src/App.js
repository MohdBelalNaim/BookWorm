import React from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Components/Navbar';
import { loggedIn } from './Redux/actions';
import Addresses from './Screens/Addresses';
import Cart from './Screens/Cart';
import CategorySection from './Screens/Category-section';
import HomeScreen from './Screens/Home-screen';
import ProductDetails from './Screens/Product-details';
import SearchResults from './Screens/Search-results';
import Signup from './Screens/Signup';

function App() {
  const dispatch = useDispatch()
  if(localStorage.getItem('auth')){
    dispatch(loggedIn())
  }

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/"  element={<HomeScreen />} />
        <Route path="/product-details"  element={<ProductDetails />} />
        <Route path="/search-results"  element={<SearchResults />} />
        <Route path="/category-section"  element={<CategorySection />} />
        <Route path="/cart"  element={<Cart />} />
        <Route path="/addresses"  element={<Addresses />} />
        <Route path="/signup"  element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
