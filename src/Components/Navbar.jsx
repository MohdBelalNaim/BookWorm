import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Components/Login'
import { auth } from '../firebase';
import { loggedOut, showLogin } from '../Redux/actions';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Overlay from './Overlay';
toast.configure()

const Header = () =>{

  const authorization = useSelector(state=>state.auth )
  const login = useSelector(state=>state.loginWindow)
  const loading = useSelector(state=>state.overlay)

  const dispatch = useDispatch()
  const navigate = useNavigate()


  function logout() {
    signOut(auth)
    .then(res=>{
      localStorage.clear()
      dispatch(loggedOut())
      navigate("/")
      toast.success("Logged out successfully",
      {position: toast.POSITION.BOTTOM_RIGHT})
    })  
  }


    return(
            <>
            {loading && <Overlay message={"Breath in, Breath out"}/>}
            {login && <Login/>}
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
              <div class="container-fluid">
                <Link to="/" class="navbar-brand"><b>BookWorm</b></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      {authorization && <Link class="nav-link active" to="/cart">Cart</Link>}
                    </li>
                    <li class="nav-item">
                        <div class="dropdown">
                          {authorization && <Link className="btn dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            My account
                          </Link>}
                            
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><Link class="dropdown-item" to="#">My orders</Link></li>
                            <li><Link class="dropdown-item" to="/addresses">Manage addresses</Link></li>
                            <li><Link class="dropdown-item text-danger" to="#" onClick={logout}>Logout</Link></li>
                          </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                      { !authorization &&
                        <button className="form-control bg-light" onClick={()=>dispatch(showLogin())}>Login</button>
                      }
                      
                    </li>
                   </ul>
                </div>
              </div>
            </nav>
            </>
    )

}


export default Header