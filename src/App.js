import React ,{ Component }  from "react";
import {NavLink} from 'react-router-dom'
import Routing from './routes'
import Login111 from './component/Login'

function App() {
  return (
    <div className="App">
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                <NavLink to="/About" activeClassName="is-active" className="navbar-item">About</NavLink>
                <NavLink to="/Contact" activeClassName="is-active" className="navbar-item">Contact</NavLink>
                <NavLink to="/Login" activeClassName="is-active" className="navbar-item">Log in</NavLink>
              </div>
            </div>
          </div>
        </nav>
        {/* <Login111/> */}
        <Routing />
      
    </div>
  );
}

export default App;
