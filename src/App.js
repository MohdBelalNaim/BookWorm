import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Components/Navbar';
import HomeScreen from './Screens/Home-screen';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/"  element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
