import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Components/Login'

const Header = () =>{
  const [login,setLogin]=useState(false)
    return(
            <>
            {login && <Login set={setLogin}/>}
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
              <div class="container-fluid">
                <Link to="/" class="navbar-brand"><b>BookWorm</b></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <Link class="nav-link active" to="/" >Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" to="/cart">Cart</Link>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown">
                          <Link className="btn dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            My account
                          </Link>
                            
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><Link class="dropdown-item" to="#">My orders</Link></li>
                            <li><Link class="dropdown-item" to="#">Manage addresses</Link></li>
                            <li><Link class="dropdown-item text-danger" to="#">Logout</Link></li>
                          </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                      <button className="form-control bg-light" onClick={()=>setLogin(true)}>Login</button>
                    </li>
                   </ul>
                </div>
              </div>
            </nav>
            </>
    )

}


export default Header